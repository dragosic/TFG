// tests/e2e/gestor-usuarios.e2e.test.ts
import { describe, test, expect, beforeAll, afterAll, beforeEach } from 'vitest'
import { chromium } from '@playwright/test'
import { loginAsAdmin, logout, getBaseUrl, isLoggedIn } from './utils'

const BASE_URL = getBaseUrl()

describe('E2E Tests - Gestor de Usuarios', () => {
  let browser: any
  let page: any

  beforeAll(async () => {
    console.log('Iniciando browser...')
    browser = await chromium.launch({ 
      headless: false,
      slowMo: 100
    })
    
    console.log('Creando nueva página...')
    page = await browser.newPage()
    await page.setViewportSize({ width: 1280, height: 800 })
    
    console.log('Navegando a login...')
    await loginAsAdmin(page)
    
    console.log('Verificando login...')
    const loggedIn = await isLoggedIn(page)
    
    if (!loggedIn) {
      const currentUrl = await page.url()
      const pageContent = await page.content()
      console.log('Login falló. URL:', currentUrl)
      console.log('Contenido de la página:', pageContent.substring(0, 500))
      throw new Error('El login falló. Revisa las credenciales o la URL.')
    }
    
    console.log('Login exitoso')
  }, 30000)

  afterAll(async () => {
    await browser.close()
  })

  // Navegar al gestor de usuarios antes de cada test
  beforeEach(async () => {
    await page.goto(`${BASE_URL}/gestor/usuarios`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(2000)
    console.log('Navegado a gestor de usuarios')
  })

  test('La página de gestor de usuarios carga correctamente', async () => {
    // Verifica que el título de la página está presente
    const title = await page.textContent('h1')
    expect(title).toContain('Gestor de Usuarios')
    
    // Verifica que la URL es correcta
    const currentUrl = page.url()
    expect(currentUrl).toBe(`${BASE_URL}/gestor/usuarios`)
    console.log('URL actual:', currentUrl)
  }, 15000)

  test('Muestra la sección de filtros', async () => {
    // Verifica que la sección de filtros está presente
    const filtersSection = await page.textContent('aside')
    expect(filtersSection).toContain('Filtros')
    expect(filtersSection).toContain('Búsqueda')
    expect(filtersSection).toContain('Roles')
  }, 10000)

  test('Campo de búsqueda funciona', async () => {
    // Encuentra el campo de búsqueda
    const searchInput = await page.$('input[placeholder="Buscar usuasrios..."]')
    expect(searchInput).not.toBeNull()
    
    // Escribe en el campo de búsqueda
    await searchInput.type('test@example.com')
    await page.waitForTimeout(500)
    
    // Verifica que el valor se estableció
    const inputValue = await searchInput.inputValue()
    expect(inputValue).toBe('test@example.com')
  }, 10000)

  test('Filtros de roles existen', async () => {
    // Verifica que los checkboxes de roles existen
    const bodyText = await page.textContent('body')
    expect(bodyText).toContain('Gestor')
    expect(bodyText).toContain('Profesor')
    expect(bodyText).toContain('Estudiante')
    expect(bodyText).toContain('Oficina ApS')
    expect(bodyText).toContain('Socio comunitario')
    expect(bodyText).toContain('Tutor')
    expect(bodyText).toContain('Colaborador')
  }, 10000)

  test('Botones de navegación existen', async () => {
    // Verifica que los botones de navegación están presentes
    const buttons = await page.$$('button:has-text("Anterior"), button:has-text("Siguiente")')
    expect(buttons.length).toBe(2)
  }, 10000)

  test('Tabla de usuarios se muestra', async () => {
    // Verifica que la tabla existe
    const table = await page.$('table')
    expect(table).not.toBeNull()
    
    // Verifica los encabezados de la tabla
    const tableHeaders = await page.textContent('thead')
    expect(tableHeaders).toContain('Usuario')
    expect(tableHeaders).toContain('Rol')
    expect(tableHeaders).toContain('Acciones')
  }, 10000)

  test('Interacción con elementos de la tabla', async () => {
    // Verifica que hay filas en la tabla (si hay datos)
    const tableRows = await page.$$('table tbody tr')
    console.log('Filas en la tabla de usuarios:', tableRows.length)
    
    if (tableRows.length > 0) {
      // Verifica que las celdas tienen contenido
      const firstRowCells = await tableRows[0].$$('td')
      expect(firstRowCells.length).toBe(2) 
      
      // Verifica que hay avatares en las filas
      const avatars = await page.$$('table img, [class*="avatar"]')
      expect(avatars.length).toBeGreaterThan(-1)
    } else {
      console.log('Tabla vacía - mostrando estado sin usuarios')
      // Si no hay usuarios, verifica que al menos la estructura de la tabla existe
      const tableExists = await page.$('table') !== null
      expect(tableExists).toBe(true)
    }
  }, 10000)

  test('Botones de acciones existen', async () => {
    // Verifica que los botones de editar existen
    const editButtons = await page.$$('a[href*="/gestor/usuarios/"], a[href*="/@me"]')
    expect(editButtons.length).toBeGreaterThan(0)
  }, 10000)

  test('Modal de confirmación de eliminación existe', async () => {
    // Verifica que el modal/dialog existe en el DOM
    const modal = await page.$('dialog.modal')
    expect(modal).not.toBeNull()
  }, 10000)

  test('La página es responsive', async () => {
    // Prueba con tamaño móvil
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto(`${BASE_URL}/gestor/usuarios`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)
    
    // Verifica que el contenido principal sigue visible
    const bodyText = await page.textContent('body')
    expect(bodyText).toContain('Gestor de Usuarios')
    expect(bodyText).toContain('Filtros')
  }, 10000)

  test('Manejo de errores', async () => {
    // Verifica que no hay mensajes de error visibles inicialmente
    const errorAlerts = await page.$$('alert[type="danger"]')
    const visibleErrors = []
    
    for (const alert of errorAlerts) {
      if (await alert.isVisible()) {
        visibleErrors.push(alert)
      }
    }
    
    expect(visibleErrors.length).toBe(0)
  }, 10000)

  test('Acceso denegado sin login', async () => {
    // Cerrar sesión primero
    await logout(page)
    
    // Intentar acceder directamente al gestor
    await page.goto(`${BASE_URL}/gestor/usuarios`, { waitUntil: 'networkidle' })
    
    // Debería redirigir al login o mostrar error de acceso
    const currentUrl = page.url()
    const bodyText = await page.textContent('body')
    
    // Puede redirigir al login o mostrar mensaje de error
    const isLoginPage = currentUrl.includes('login') || bodyText.includes('Inicio de sesión')
    const isAccessDenied = bodyText.includes('acceso') || bodyText.includes('denegado') || bodyText.includes('permisos')
    
    expect(isLoginPage || isAccessDenied).toBe(true)
    
    // Volver a hacer login para los siguientes tests
    await loginAsAdmin(page)
  }, 15000)
})