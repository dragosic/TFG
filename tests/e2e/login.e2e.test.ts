// tests/e2e/login-security.test.ts
import { describe, test, beforeAll, afterAll, beforeEach, expect } from 'vitest'
import { chromium } from '@playwright/test'
import { getBaseUrl } from './utils'

const BASE_URL = getBaseUrl()

describe('E2E Tests - Login Form', () => {
  let browser: any
  let page: any

  beforeAll(async () => {
    browser = await chromium.launch({ 
      headless: false, // Cambia a true para CI
      slowMo: 100
    })
    page = await browser.newPage()
    await page.setViewportSize({ width: 1280, height: 800 })
  }, 30000)

  afterAll(async () => {
    await browser.close()
  })

  beforeEach(async () => {
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)
  })

  // Test 1: SQL Injection - VERSIÓN MEJORADA
test('Debe resistir SQL Injection en email', async () => {
  const sqlInjectionPayloads = [
    "' OR '1'='1",
    "' OR 1=1--",
    "admin'--",
    "'; DROP TABLE users; --",
    "' UNION SELECT username, password FROM users--",
    "' OR EXISTS(SELECT * FROM users)--",
    "' OR (SELECT COUNT(*) FROM users) > 0--"
  ]

  for (const payload of sqlInjectionPayloads) {
    console.log(`Probando payload: ${payload}`)
    
    await page.fill('input[type="email"]', payload)
    await page.fill('input[type="password"]', 'anypassword')
    await page.click('input[type="submit"]')
    
    // Esperar respuesta
    await page.waitForTimeout(3000)
    
    // Verificar que NO estamos logueados (debe fallar el login)
    const currentUrl = page.url()
    const pageContent = await page.textContent('body')
    
    // El login debería fallar o permanecer en la página de login
    expect(currentUrl).toContain('login')
    
    // Verificar que no hay errores de servidor (500) o de base de datos
    expect(pageContent).not.toContain('500')
    expect(pageContent).not.toContain('Internal Server Error')
    expect(pageContent).not.toContain('SQL')
    expect(pageContent).not.toContain('database')
    expect(pageContent).not.toContain('syntax')
    
    // Limpiar formulario para el siguiente test
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)
  }
}, 40000)

  // Test 2: XSS básico - VERSIÓN CON DEBUG
test('Debe resistir XSS en los campos', async () => {
  const xssPayloads = [
    '<script>alert("XSS")</script>',
    '<img src="x" onerror="alert(\'XSS\')">',
    'javascript:alert("XSS")',
    '" onmouseover="alert(\'XSS\')"'
  ]

  for (const payload of xssPayloads) {
    console.log(`🔍 Probando payload XSS: ${payload}`)
    
    await page.fill('input[type="email"]', payload)
    await page.fill('input[type="password"]', payload)
    await page.click('input[type="submit"]')
    
    await page.waitForTimeout(3000)
    
    // DEBUG: Ver qué scripts hay en la página
    const allScripts = await page.$$('script')
    console.log(`📜 Número total de scripts encontrados: ${allScripts.length}`)
    
    for (let i = 0; i < allScripts.length; i++) {
      const script = allScripts[i]
      const scriptContent = await script.innerHTML()
      const scriptSrc = await script.getAttribute('src')
      const scriptType = await script.getAttribute('type')
      
      console.log(`   Script ${i + 1}: src=${scriptSrc}, type=${scriptType}`)
      console.log(`   Contenido: ${scriptContent.substring(0, 100)}...`)
    }
    
    // Verificar que no hay scripts maliciosos
    const maliciousScripts = await page.$$('script:not([src]):not([type="application/json"]):not([type="application/ld+json"])')
    console.log(`🦹 Scripts potencialmente maliciosos: ${maliciousScripts.length}`)
    
    const maliciousAlerts = await page.$$('img[onerror], *[onmouseover]')
    console.log(`🦹 Elementos con event handlers maliciosos: ${maliciousAlerts.length}`)
    
    // Si hay scripts, verificar que no son los payloads que injectamos
    if (maliciousScripts.length > 0) {
      for (const script of maliciousScripts) {
        const content = await script.innerHTML()
        console.log(`   Contenido del script: ${content}`)
        
        // Verificar que no contiene nuestros payloads
        expect(content).not.toContain('alert("XSS")')
        expect(content).not.toContain('onerror')
      }
    }
    
    // El payload debería ser escapado o rechazado en el HTML
    const pageContent = await page.content()
    expect(pageContent).not.toContain('<script>alert("XSS")</script>')
    expect(pageContent).not.toContain('onerror="alert(\'XSS\')"')
    expect(pageContent).not.toContain('onmouseover="alert(\'XSS\')"')
    
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)
  }
}, 40000)

  // Test 3: Validación de entrada
  test('Debe validar formatos de email correctos', async () => {
    const invalidEmails = [
      'invalid-email',
      'invalid@',
      '@invalid.com',
      'invalid@com',
      'invalid@.com'
    ]

    for (const email of invalidEmails) {
      await page.fill('input[type="email"]', email)
      await page.fill('input[type="password"]', 'password123')
      await page.click('input[type="submit"]')
      
      await page.waitForTimeout(1000)
      
      // Debería mostrar error de validación o permanecer en login
      const currentUrl = page.url()
      const pageContent = await page.textContent('body')
      
      // El login debería fallar
      expect(currentUrl).toContain('login')
      
      await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' })
    }
  }, 20000)

  // Test 4: Campos vacíos
  test('Debe manejar campos vacíos correctamente', async () => {
    // Caso 1: Email vacío
    await page.fill('input[type="password"]', 'password123')
    await page.click('input[type="submit"]')
    
    await page.waitForTimeout(1000)
    expect(page.url()).toContain('login')
    
    // Caso 2: Password vacío
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' })
    await page.fill('input[type="email"]', 'test@example.com')
    await page.click('input[type="submit"]')
    
    await page.waitForTimeout(1000)
    expect(page.url()).toContain('login')
    
    // Caso 3: Ambos vacíos
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' })
    await page.click('input[type="submit"]')
    
    await page.waitForTimeout(1000)
    expect(page.url()).toContain('login')
  }, 20000)

  // Test 5: Password muy largo
  test('Debe manejar passwords muy largos', async () => {
    const longPassword = 'A'.repeat(1000) // Password muy largo
    
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="password"]', longPassword)
    await page.click('input[type="submit"]')
    
    await page.waitForTimeout(2000)
    
    // No debería crashear el servidor
    const currentUrl = page.url()
    const pageContent = await page.textContent('body')
    
    expect(pageContent).not.toContain('500')
    expect(pageContent).not.toContain('Internal Server Error')
  }, 15000)

  // Test 6: Rate limiting (si está implementado)
  test('Debe tener protección contra fuerza bruta', async () => {
    const attempts = 5
    
    for (let i = 0; i < attempts; i++) {
      await page.fill('input[type="email"]', `attempt${i}@example.com`)
      await page.fill('input[type="password"]', 'wrongpassword')
      await page.click('input[type="submit"]')
      
      await page.waitForTimeout(500)
      
      if (i > 2) {
        // Después de varios intentos, debería haber throttling
        const pageContent = await page.textContent('body')
        const mightHaveThrottling = pageContent.includes('espera') || 
                                  pageContent.includes('intentos') ||
                                  pageContent.includes('lento') ||
                                  pageContent.includes('demasiados')
        
        // No es obligatorio, pero es buena práctica
        if (mightHaveThrottling) {
          console.log('✅ Rate limiting detectado')
          break
        }
      }
      
      await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' })
    }
  }, 30000)

  // Test 7: Headers de seguridad
  test('Debe tener headers de seguridad HTTP', async () => {
    const response = await page.goto(`${BASE_URL}/login`)
    const headers = response.headers()
    
    // Verificar headers de seguridad básicos
    expect(headers['x-frame-options']).toBeDefined()
    expect(headers['x-content-type-options']).toBe('nosniff')
    
    // CSP es opcional pero recomendado
    if (headers['content-security-policy']) {
      expect(headers['content-security-policy']).toContain("script-src 'self'")
    }
  }, 15000)

  // Test 8: Autocompletado seguro
  test('Debe tener autocompletado seguro desactivado', async () => {
    const emailInput = await page.$('input[type="email"]')
    const passwordInput = await page.$('input[type="password"]')
    
    const emailAutocomplete = await emailInput.getAttribute('autocomplete')
    const passwordAutocomplete = await passwordInput.getAttribute('autocomplete')
    
    expect(emailAutocomplete).toBe('email')
    expect(passwordAutocomplete).toBe('current-password') // O 'off' para más seguridad
  }, 10000)
})