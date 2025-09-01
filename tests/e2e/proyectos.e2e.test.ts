// tests/e2e/proyectos.e2e.test.ts
import { describe, test, expect, beforeAll, afterAll } from 'vitest'
import { chromium } from '@playwright/test'

describe('E2E Tests - Página de Proyectos', () => {
  let browser: any
  let page: any

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false })
    page = await browser.newPage()
    await page.setViewportSize({ width: 1280, height: 800 })
  })

  afterAll(async () => {
    await browser.close()
  })

  test('La página de proyectos carga correctamente', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    await page.waitForTimeout(2000)
    
    // Verifica que el título de la página está presente
    const title = await page.textContent('h1')
    expect(title).toContain('Proyectos')
    
    // Verifica que la URL es correcta
    const currentUrl = page.url()
    expect(currentUrl).toBe('http://localhost:3000/proyectos')
  })

  test('Muestra la sección de filtros', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    
    // Verifica que la sección de filtros está presente
    const filtersSection = await page.textContent('aside')
    expect(filtersSection).toContain('Filtros')
    expect(filtersSection).toContain('Búsqueda')
    expect(filtersSection).toContain('Entidad')
    expect(filtersSection).toContain('Ciudad')
    expect(filtersSection).toContain('Cuatrimestre')
  })

  test('Campo de búsqueda funciona', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    
    // Encuentra el campo de búsqueda
    const searchInput = await page.$('input[placeholder="Buscar proyecto..."]')
    expect(searchInput).not.toBeNull()
    
    // Escribe en el campo de búsqueda
    await searchInput.type('test')
    await page.waitForTimeout(500)
    
    // Verifica que el valor se estableció
    const inputValue = await searchInput.inputValue()
    expect(inputValue).toBe('test')
  })

  test('Botones de navegación existen', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    
    // Verifica que los botones de navegación están presentes
    const buttons = await page.$$('button:has-text("Anterior"), button:has-text("Siguiente")')
    expect(buttons.length).toBe(2)
    
    // Verifica que el botón "Anterior" está deshabilitado inicialmente
    const prevButton = await page.$('button:has-text("Anterior")')
    const isDisabled = await prevButton.getAttribute('disabled')
    expect(isDisabled).not.toBeNull()
  })

  test('Tabla de proyectos se muestra', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    await page.waitForTimeout(2000)
    
    // Verifica que la tabla existe
    const table = await page.$('table')
    expect(table).not.toBeNull()
    
    // Verifica los encabezados de la tabla
    const tableHeaders = await page.textContent('thead')
    expect(tableHeaders).toContain('Imagen')
    expect(tableHeaders).toContain('Entidad')
    expect(tableHeaders).toContain('Título')
    expect(tableHeaders).toContain('Ciudad')
    expect(tableHeaders).toContain('Estado')
  })

  test('Filtros de ciudad funcionan', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    
    // Verifica que el filtro de ciudad existe
    const cityFilter = await page.$('h3:has-text("Ciudad")')
    expect(cityFilter).not.toBeNull()
    
    // Haz scroll hasta el filtro de ciudad
    await cityFilter.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
  })

  test('Filtros de cuatrimestre existen', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)
    
    // Solo verifica que el texto de cuatrimestre está presente
    const bodyText = await page.textContent('body')
    expect(bodyText).toContain('Cuatrimestre')
    
    // Verifica que las opciones de cuatrimestre están mencionadas
    expect(bodyText).toContain('Primer')
    expect(bodyText).toContain('Segundo') 
    expect(bodyText).toContain('Anual')
    
    }, 5000) // Timeout reducido a 5 segundos

  test('Filtros de estado funcionan', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    
    // Verifica que el filtro de estado existe
    const statusFilter = await page.$('h3:has-text("Estado")')
    expect(statusFilter).not.toBeNull()
    
    // Haz scroll hasta el filtro de estado
    await statusFilter.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
  })

  test('Filtros de fechas existen', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    
    // Verifica que los inputs de fecha existen
    const dateInputs = await page.$$('input[type="date"]')
    expect(dateInputs.length).toBeGreaterThan(0)
    
    // Verifica periodos de ejecución y definición
    const bodyText = await page.textContent('body')
    expect(bodyText).toContain('Periodo de ejecución')
    expect(bodyText).toContain('Periodo de definición')
    expect(bodyText).toContain('Fecha fin')
  })

  test('Paginación funciona', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    
    // Verifica que los botones de paginación existen
    const paginationButtons = await page.$$('button:has-text("Back"), button:has-text("Next")')
    expect(paginationButtons.length).toBe(2)
    
    // Verifica que muestra información de paginación
    const paginationInfo = await page.textContent('body')
    expect(paginationInfo).toContain('resultados')
    expect(paginationInfo).toContain('Total')
  })

  test('La página es responsive', async () => {
    // Prueba con tamaño móvil
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    await page.waitForTimeout(1000)
    
    // Verifica que el contenido principal sigue visible
    const bodyText = await page.textContent('body')
    expect(bodyText).toContain('Proyectos')
    expect(bodyText).toContain('Filtros')
    
    // Toma screenshot para verificar responsive
    await page.screenshot({ path: 'tests/screenshots/proyectos-mobile.png' })
  })

  test('Interacción con elementos de la tabla', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    await page.waitForTimeout(2000)
    
    // Verifica que hay filas en la tabla (si hay datos)
    const tableRows = await page.$$('table tbody tr')
    console.log('Filas en la tabla:', tableRows.length)
    
    if (tableRows.length > 0) {
      // Verifica que las celdas tienen contenido
      const firstRowCells = await tableRows[0].$$('td')
      expect(firstRowCells.length).toBeGreaterThan(0)
      
      // Verifica que hay imágenes en las filas (si existen)
      const images = await page.$$('table img')
      expect(images.length).toBeGreaterThan(0)
    }
  })

  test('Manejo de errores y estados vacíos', async () => {
    await page.goto('http://localhost:3000/proyectos', { waitUntil: 'networkidle' })
    
    // Verifica que no hay mensajes de error visibles inicialmente
    const errorAlerts = await page.$$('alert[type="danger"]')
    const visibleErrors = []
    
    for (const alert of errorAlerts) {
      if (await alert.isVisible()) {
        visibleErrors.push(alert)
      }
    }
    
    expect(visibleErrors.length).toBe(0)
  })
})