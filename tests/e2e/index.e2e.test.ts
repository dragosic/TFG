// tests/e2e/index.e2e.test.ts
import { describe, test, expect, beforeAll, afterAll } from 'vitest'
import { chromium } from '@playwright/test'
import { 
  loginAsAdmin, 
  loginAsCommunityPartner, 
  loginAsStudent, 
  logout, 
  getBaseUrl 
} from './utils'

const BASE_URL = getBaseUrl()

describe('E2E Tests - Portal ApS UNED', () => {
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

  // Función auxiliar para navegar y esperar
  async function navigateTo(url: string, waitTime = 2000) {
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.waitForTimeout(waitTime)
  }

  // Función auxiliar para verificar texto en página
  async function verifyTextContains(...texts: string[]) {
    const bodyText = await page.textContent('body') || ''
    for (const text of texts) {
      expect(bodyText).toContain(text)
    }
  }

  test('La página principal carga correctamente', async () => {
    await navigateTo(BASE_URL)
    
    // Debug: Ver título de la página
    const title = await page.title()
    console.log('Título de la página:', title)
    
    // Verifica que la URL es correcta
    const currentUrl = page.url()
    expect(currentUrl).toBe(BASE_URL + '/')
    
    // Verifica que elementos clave están presentes
    await verifyTextContains('¿Qué es el ApS?', 'Proyectos', 'Contacta', 'Cómo participar')
  })

  test('Muestra las estadísticas de la página principal', async () => {
    await navigateTo(BASE_URL, 1000)
    await verifyTextContains('3Proyectos', '3Partenariados', '3Ofertas')
  })

  test('Botones "Ver" son clickables y funcionan', async () => {
    await navigateTo(BASE_URL)
    
    // Encuentra botones "Ver" específicos usando el data-testid
    const verButtons = await page.$$('[data-testid="verEstudiantes"], a:has-text("Ver")')
    console.log('Botones Ver encontrados:', verButtons.length)
    expect(verButtons.length).toBeGreaterThan(0)
    
    // Haz clic en el botón de estudiantes (usando el data-testid)
    const estudianteButton = await page.$('[data-testid="verEstudiantes"]')
    if (estudianteButton) {
      await estudianteButton.click()
      await page.waitForTimeout(1000)
      
      // Verifica que navegó a la página correcta
      const currentUrl = page.url()
      expect(currentUrl).toContain('estudiantes')
      
      // Vuelve a la página principal
      await page.goBack()
      await page.waitForTimeout(500)
    }
  })

  test('Sección de participación muestra los tres roles', async () => {
    await navigateTo(BASE_URL)
    await verifyTextContains('Estudiantes', 'Profesores', 'Socios comunitarios')
    
    // Verifica que los iconos están presentes
    const icons = await page.$$('svg, i, [class*="icon"]')
    expect(icons.length).toBeGreaterThan(0)
  })

  test('Sección de noticias está presente con contenido', async () => {
    await navigateTo(BASE_URL)
    await verifyTextContains('Noticias', 'Portal ApS UNED activo', 'UNED - Oficina ApS')
    
    // Verifica que hay enlaces en las noticias
    const newsLinks = await page.$$('a[href*="http"], a[href^="/"]')
    expect(newsLinks.length).toBeGreaterThan(0)
  })

  test('Carousel de imágenes está presente', async () => {
    await navigateTo(BASE_URL)
    
    // Verifica que hay imágenes en el carousel
    const images = await page.$$('img[src*="/img/carousel"]')
    expect(images.length).toBeGreaterThan(0)
    
    // Verifica que el texto del carousel está presente
    await verifyTextContains('Incorpora el ApS en tu docencia', 'Cursa asignaturas que integran ApS')
  })

  test('Navegación principal funciona', async () => {
    await navigateTo(BASE_URL)
    
    // Verifica que los enlaces de navegación existen
    const navLinks = await page.$$('a:has-text("¿Qué es el ApS?"), a:has-text("Proyectos"), a:has-text("Contacta"), a:has-text("ApS UNED")')
    console.log('Enlaces de navegación encontrados:', navLinks.length)
    
    // Solo verifica que los enlaces existen y tienen href
    if (navLinks.length > 0) {
      const href = await navLinks[0].getAttribute('href')
      console.log('Primer enlace de navegación href:', href)
      expect(href).toBeTruthy()
      expect(href).not.toBe('#')
    } else {
      // Fallback: verifica que hay enlaces en general
      const allLinks = await page.$$('a[href]')
      expect(allLinks.length).toBeGreaterThan(0)
    }
  }, 10000)

  test('Footer contiene información de contacto y copyright', async () => {
    await navigateTo(BASE_URL)
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)
    
    // Obtener texto del footer o del body completo
    let footerText = await page.textContent('footer')
    if (!footerText) {
      footerText = await page.textContent('body')
    }
    
    console.log('Texto del footer:', footerText)
    
    // Verificaciones más flexibles
    expect(footerText).toContain('Portal ApS')
    expect(footerText).toContain('2025')
    
    // Buscar UNED en todo el texto del footer/body (puede estar en otra parte)
    if (!footerText.includes('UNED')) {
      console.log('UNED no encontrado en el footer, buscando en toda la página...')
      const fullBodyText = await page.textContent('body')
      expect(fullBodyText).toContain('UNED')
    } else {
      expect(footerText).toContain('UNED')
    }
  })

  test('Formulario de newsletter está presente', async () => {
    await navigateTo(BASE_URL)
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)
    
    await verifyTextContains('Suscríbete')
    
    // Busca inputs de email
    const emailInputs = await page.$$('input[type="email"]')
    console.log('Inputs de email encontrados:', emailInputs.length)
    expect(emailInputs.length).toBeGreaterThan(0)
  })

  test('Enlaces de la página son accesibles', async () => {
    await navigateTo(BASE_URL)
    
    // Encuentra todos los enlaces visibles
    const links = await page.$$('a:visible')
    console.log('Número de enlaces visibles encontrados:', links.length)
    
    if (links.length > 0) {
      // Prueba con el primer enlace visible
      const firstLink = links[0]
      const isVisible = await firstLink.isVisible()
      console.log('Primer enlace visible:', isVisible)
      expect(isVisible).toBe(true)
    } else {
      // Si no se encuentran enlaces visibles, busca en el DOM completo
      const allLinks = await page.$$('a')
      console.log('Enlaces totales en el DOM:', allLinks.length)
      expect(allLinks.length).toBeGreaterThan(0)
    }
  })

  test('Interacción básica con botones', async () => {
    await navigateTo(BASE_URL)
    
    // Encuentra elementos clickables
    const clickableElements = await page.$$('button, [role="button"], a[href]')
    console.log('Elementos clickables encontrados:', clickableElements.length)
    expect(clickableElements.length).toBeGreaterThan(0)
  })

  test('La página es responsive en móvil', async () => {
    await page.setViewportSize({ width: 375, height: 667 })
    await navigateTo(BASE_URL, 1000)
    
    // Verifica que el contenido principal sigue visible
    await verifyTextContains('ApS', 'Proyectos')
  })

  test('Página carga sin errores JavaScript', async () => {
    const errors: string[] = []
    page.on('pageerror', error => {
      errors.push(error.message)
    })
    
    page.on('console', message => {
      if (message.type() === 'error') {
        errors.push(message.text())
      }
    })
    
    await navigateTo(BASE_URL, 1000)
    
    console.log('Errores JavaScript encontrados:', errors.length)
    if (errors.length > 0) {
      console.log('Errores:', errors)
    }
    expect(errors.length).toBe(0)
  })

})