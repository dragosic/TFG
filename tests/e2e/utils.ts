// tests/e2e/utils.ts
import { Page } from '@playwright/test'

const BASE_URL = 'http://localhost:3000'

export async function loginAsAdmin(page: Page): Promise<void> {
  console.log(`🔍 Navegando a: ${BASE_URL}/login`)
  
  try {
    // Navegar a login
    await page.goto(`${BASE_URL}/login`, { 
      waitUntil: 'domcontentloaded',
      timeout: 15000
    })
    
    console.log('✅ Página de login cargada')
    
    // Esperar y verificar que los campos existen
    await page.waitForSelector('input[type="email"]', { timeout: 5000 })
    await page.waitForSelector('input[type="password"]', { timeout: 5000 })
    await page.waitForSelector('input[type="submit"]', { timeout: 5000 })
    
    console.log('✅ Campos de formulario encontrados')
    
    // Rellenar formulario
    await page.fill('input[type="email"]', 'interno1@ejemplo.com')
    await page.fill('input[type="password"]', '12345678')
    
    console.log('✅ Formulario completado')
    
    // Capturar el estado antes del login
    const preLoginUrl = page.url()
    console.log(`📋 URL antes del login: ${preLoginUrl}`)
    
    // Hacer click y esperar navegación
    await Promise.all([
      page.waitForNavigation({ 
        waitUntil: 'domcontentloaded',
        timeout: 10000 
      }),
      page.click('input[type="submit"]')
    ])
    
    const postLoginUrl = page.url()
    console.log(`📋 URL después del login: ${postLoginUrl}`)
    
    // Verificar si hay mensajes de error
    const errorElements = await page.$$('alert[type="danger"], .error, .text-red, [class*="error"]')
    if (errorElements.length > 0) {
      const errorText = await page.textContent('body')
      console.log('❌ Error de login detectado:', errorText?.substring(0, 200))
    }
    
    console.log('✅ Proceso de login completado')
    
  } catch (error) {
    console.error('❌ Error detallado en login:', error)
    
    console.log('📄 HTML de la página (primeros 500 chars):', pageContent.substring(0, 500))
    
    throw error
  }
}

export async function logout(page: Page): Promise<void> {
  await page.goto(`${BASE_URL}/api/auth/logout`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  console.log('✅ Logout completado')
}

export function getBaseUrl(): string {
  return BASE_URL
}

export async function isLoggedIn(page: Page): Promise<boolean> {
  const currentUrl = page.url()
  const isLoginPage = currentUrl.includes('login')
  console.log(`🔍 Verificando login - URL: ${currentUrl}, ¿Es página de login?: ${isLoginPage}`)
  return !isLoginPage
}


export async function loginAsCommunityPartner(page: any): Promise<void> {
  console.log(`🔍 Navegando a: ${BASE_URL}/login`)
  
  try {
    // Navegar a login
    await page.goto(`${BASE_URL}/login`, { 
      waitUntil: 'domcontentloaded',
      timeout: 15000
    })
    
    console.log('✅ Página de login cargada')
    
    // Esperar y verificar que los campos existen
    await page.waitForSelector('input[type="email"]', { timeout: 5000 })
    await page.waitForSelector('input[type="password"]', { timeout: 5000 })
    await page.waitForSelector('input[type="submit"]', { timeout: 5000 })
    
    console.log('✅ Campos de formulario encontrados')
    
    // Rellenar formulario
    await page.fill('input[type="email"]', 'socio1@ejemplo.com')
    await page.fill('input[type="password"]', '12345678')
    
    console.log('✅ Formulario completado')
    
    // Capturar el estado antes del login
    const preLoginUrl = page.url()
    console.log(`📋 URL antes del login: ${preLoginUrl}`)
    
    // Hacer click y esperar navegación
    await Promise.all([
      page.waitForNavigation({ 
        waitUntil: 'domcontentloaded',
        timeout: 10000 
      }),
      page.click('input[type="submit"]')
    ])
    
    const postLoginUrl = page.url()
    console.log(`📋 URL después del login: ${postLoginUrl}`)
    
    // Verificar si hay mensajes de error
    const errorElements = await page.$$('alert[type="danger"], .error, .text-red, [class*="error"]')
    if (errorElements.length > 0) {
      const errorText = await page.textContent('body')
      console.log('❌ Error de login detectado:', errorText?.substring(0, 200))
    }
    
    console.log('✅ Proceso de login completado')
    
  } catch (error) {
    console.error('❌ Error detallado en login:', error)
    
    console.log('📄 HTML de la página (primeros 500 chars):', pageContent.substring(0, 500))
    
    throw error
  }
}

export async function loginAsStudent(page: any): Promise<void> {
  console.log(`🔍 Navegando a: ${BASE_URL}/login`)
  
  try {
    // Navegar a login
    await page.goto(`${BASE_URL}/login`, { 
      waitUntil: 'domcontentloaded',
      timeout: 15000
    })
    
    console.log('✅ Página de login cargada')
    
    // Esperar y verificar que los campos existen
    await page.waitForSelector('input[type="email"]', { timeout: 5000 })
    await page.waitForSelector('input[type="password"]', { timeout: 5000 })
    await page.waitForSelector('input[type="submit"]', { timeout: 5000 })
    
    console.log('✅ Campos de formulario encontrados')
    
    // Rellenar formulario
    await page.fill('input[type="email"]', 'estInter1@aps.es')
    await page.fill('input[type="password"]', '12345678')
    
    console.log('✅ Formulario completado')
    
    // Capturar el estado antes del login
    const preLoginUrl = page.url()
    console.log(`📋 URL antes del login: ${preLoginUrl}`)
    
    // Hacer click y esperar navegación
    await Promise.all([
      page.waitForNavigation({ 
        waitUntil: 'domcontentloaded',
        timeout: 10000 
      }),
      page.click('input[type="submit"]')
    ])
    
    const postLoginUrl = page.url()
    console.log(`📋 URL después del login: ${postLoginUrl}`)
    
    // Verificar si hay mensajes de error
    const errorElements = await page.$$('alert[type="danger"], .error, .text-red, [class*="error"]')
    if (errorElements.length > 0) {
      const errorText = await page.textContent('body')
      console.log('❌ Error de login detectado:', errorText?.substring(0, 200))
    }
    
    console.log('✅ Proceso de login completado')
    
  } catch (error) {
    console.error('❌ Error detallado en login:', error)
    
    console.log('📄 HTML de la página (primeros 500 chars):', pageContent.substring(0, 500))
    
    throw error
  }
}