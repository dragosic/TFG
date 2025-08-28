// tests/unit/que-es.unit.test.ts
import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

// Mock de createReusableTemplate
vi.mock('vue', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    createReusableTemplate: () => {
      const TemplateComponent = defineComponent({
        setup(_, { slots }) {
          return () => slots.default?.()
        }
      })
      return [TemplateComponent, TemplateComponent]
    }
  }
})

// Importamos el componente después del mock
import QueEs from '@/pages/info/que-es.vue'

describe('Unit Tests - Página de Preguntas Frecuentes sobre ApS', () => {
  test('renderiza correctamente la estructura principal', () => {
    const wrapper = mount(QueEs)
    
    // Verifica elementos estructurales
    expect(wrapper.find('article').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('Preguntas más frecuentes')
    expect(wrapper.findAll('h2').length).toBeGreaterThan(5)
  })

  

  test('explica correctamente el concepto de Aprendizaje-Servicio', () => {
    const wrapper = mount(QueEs)
    const text = wrapper.text()
    
    expect(text).toContain('Aprendizaje-Servicio')
    expect(text).toContain('metodología de aprendizaje')
    expect(text).toContain('función social')
    expect(text).toContain('carácter cívico')
  })

  test('describe los tres roles principales del ecosistema ApS', () => {
    const wrapper = mount(QueEs)
    const text = wrapper.text()
    
    expect(text).toContain('ENTIDAD')
    expect(text).toContain('PROFESOR') 
    expect(text).toContain('ALUMNO')
    expect(text).toContain('PRESENTAR UNA OFERTA')
    expect(text).toContain('RESPALDAR UNA OFERTA')
  })

  test('explica el flujo completo de creación de proyectos', () => {
    const wrapper = mount(QueEs)
    const text = wrapper.text()
    
    // Verifica el flujo: Oferta → Partenariado → Proyecto
    expect(text).toContain('Oferta')
    expect(text).toContain('PARTENARIADO')
    expect(text).toContain('PROYECTO')
    expect(text).toContain('SOLICITUDES DE ALUMNOS')
  })

  test('contiene elementos de accesibilidad y semántica HTML', () => {
    const wrapper = mount(QueEs)
    
    // Elementos semánticos
    expect(wrapper.find('article').exists()).toBe(true)
    expect(wrapper.findAll('dfn').length).toBeGreaterThan(0)
    expect(wrapper.findAll('abbr').length).toBeGreaterThan(0)
    
    // Estructura de contenido
    expect(wrapper.findAll('p').length).toBeGreaterThan(10)
    expect(wrapper.findAll('ul').length).toBeGreaterThan(3)
    expect(wrapper.findAll('li').length).toBeGreaterThan(15)
  })

  test('los enlaces de anclaje internos funcionan correctamente', () => {
    const wrapper = mount(QueEs)
    const html = wrapper.html()
    
    // IDs reales que existen en el componente
    const internalIds = [
      'que-es-aps',
      'que-es-portal-aps', 
      'que-es-oferta-aps',
      'que-es-partenariado',
      'que-es-proyecto'
    ]
    
    internalIds.forEach(id => {
      expect(html).toContain(`id="${id}"`)
    })
  })

  test('contiene todas las secciones de preguntas frecuentes', () => {
  const wrapper = mount(QueEs)
  const html = wrapper.html()
  
  // Textos exactos que aparecen en el componente real
  const expectedSections = [
    '¿Qué es <dfn id="que-es-aps">',
    'Portal <abbr title="Aprendizaje-Servicio">ApS</abbr>',
    '¿Cómo se genera un proyecto <abbr title="Aprendizaje-Servicio">ApS</abbr>?',
    '¿Qué es una <dfn id="que-es-oferta-aps">Oferta</dfn>?',
    'PARTENARIADO',
    'PROYECTO <abbr title="Aprendizaje-Servicio">ApS</abbr>'
  ]
  
  expectedSections.forEach(section => {
    expect(html).toContain(section)
  })
})

test('el contenido es completo y informativo', () => {
  const wrapper = mount(QueEs)
  const text = wrapper.text()
  
  // Verifica longitud mínima del contenido
  expect(text.length).toBeGreaterThan(2500)
  
  // Conceptos clave que deben aparecer (basado en el contenido real)
  const keyConcepts = [
    'metodología',
    'aprendizaje', 
    'servicio',
    'social',
    'comunidad',
    'universidad',
    'estudiante',
    'PROFESOR', 
    'ENTIDAD', 
    'COLABORATIVAS'
  ]
  
  keyConcepts.forEach(concept => {
    expect(text).toContain(concept)
  })
})

  test('muestra los estados de partenariado correctamente', () => {
    const wrapper = mount(QueEs)
    const text = wrapper.text()
    
    const partnershipStates = [
      'EN NEGOCIACIÓN',
      'ACORDADO',
      'SIN RESPUESTA', 
      'SUSPENDIDO'
    ]
    
    partnershipStates.forEach(state => {
      expect(text).toContain(state)
    })
  })

  test('muestra los estados de proyecto correctamente', () => {
    const wrapper = mount(QueEs)
    const text = wrapper.text()
    
    const projectStates = [
      'ABIERTO',
      'EN CURSO',
      'FINALIZADO',
      'CANCELADO'
    ]
    
    projectStates.forEach(state => {
      expect(text).toContain(state)
    })
  })
})