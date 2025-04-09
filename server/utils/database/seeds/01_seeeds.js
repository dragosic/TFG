/**
 * Seeder para las tablas 'usuario' y 'notificaciones'
 */

export async function seed(knex) {
  await knex('usuario').insert([
    {
      id: 1,
      origin_login: '',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 2,
      origin_login: '',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 3,
      origin_login: '',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    }
  ]).onConflict('id').merge();

  // SEED PARA NOTIFICACIONES
  await knex('notificaciones').insert([
    {
      id: 1,
      idDestino: 1,
      leido: 0,
      titulo: 'Bienvenido',
      mensaje: 'Mensaje de bienvenida',
      fecha_fin: '2025-07-31',
      pendiente: 1
    },
    {
      id: 2,
      idDestino: 2,
      leido: 0,
      titulo: 'Bienvenido',
      mensaje: 'Mensaje de bienvenida',
      fecha_fin: '2025-12-31',
      pendiente: 1
    },
    {
      id: 3,
      idDestino: 3,
      leido: 0,
      titulo: 'Bienvenido',
      mensaje: 'Mensaje de bienvenida',
      fecha_fin: '2025-12-31',
      pendiente: 1
    }
  ]).onConflict('id').merge();

  // datos_personales_interno_seed.js

/**
 * Seeder para la tabla 'datos_personales_interno'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'datos_personales_interno'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */
 
        await knex('datos_personales_interno').insert([
          {
            id: 1,
            correo: 'ejemploo1@ejemplo.com',
            password: '1234',
            apellidos: 'Apellido1 Apellido1',
            nombre: 'Nombre1',
            telefono: 123456789
          },
          {
            id: 2,
            correo: 'ejemploo2@ejemplo.com',
            password: '1234',
            apellidos: 'Apellido2 Apellid2',
            nombre: 'Nombre1',
            telefono: 223456789
          },
          {
            id: 3,
            correo: 'ejemploo3@ejemplo.com',
            password: '1234',
            apellidos: 'Apellido3 Apellido3',
            nombre: 'Nombree3',
            telefono: 323456789
          }
        ]).onConflict('id') // Si el 'id' ya existe...
        .merge();         // ...actualiza el registro
   
  
  
  // profesor_seed.js

/**
 * Seeder para la tabla 'profesor'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'profesor'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


    // Primero, limpia la tabla para evitar duplicados
    
        // Luego, inserta los registros
        await knex('profesor').insert([
          { id: 1 },
          { id: 2 },
          { id: 3 }
        ]).onConflict('id') // Si el 'id' ya existe...
        .merge();         // ...actualiza el registro
  
  
  // profesor_interno_seed.js

/**
 * Seeder para la tabla 'profesor_interno'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'profesor_interno'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


        // Luego, inserta los registros
        await knex('profesor_interno').insert([
          {
            id: 1,
            datos_personales_Id: 1
          },
          {
            id: 2,
            datos_personales_Id: 2
          },
          {
            id: 3,
            datos_personales_Id: 3
          }
        ]).onConflict('id') // Si el 'id' ya existe...
        .merge();         // ...actualiza el registro
      
  
  

        await knex('anuncio_servicio').insert([
          {
            id: 1,
            titulo: "Servicio de Diseño Gráfico",
            descripcion: "Ofrecemos diseño gráfico profesional para empresas y emprendedores.",
            imagen: 'prueba1.jpg',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now(),
            dummy: 0
          },
          {
            id: 2,
            titulo: "Consultoría en Marketing Digital",
            descripcion: "Asesoramos en estrategias digitales para potenciar tu negocio en redes sociales.",
            imagen: 'prueba2.jpg',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now(),
            dummy: 0
          },
          {
            id: 3,
            titulo: "Desarrollo de Aplicaciones Web",
            descripcion: "Creamos aplicaciones web a medida con las últimas tecnologías.",
            imagen: 'prueba3.jpg',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now(),
            dummy: 0
          }
        ]).onConflict('id') // Si el 'id' ya existe...
        .merge();         // ...actualiza el registro
  // oferta_servicio_seed.js

/**
 * Seeder para la tabla 'oferta_servicio'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'oferta_servicio'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */



            // Luego, inserta los registros
            await knex('oferta_servicio').insert([
                {
                    id: 1,
                    cuatrimestre: 2,
                    anio_academico: 3,
                    fecha_limite: knex.raw('DATE(NOW() + interval 30 day)'), // Convertir a tipo DATE
                    observaciones_temporales: 'ninguna',
                    creador: 1
                },
                {
                    id: 2,
                    cuatrimestre: 2,
                    anio_academico: 3,
                    fecha_limite: knex.raw('DATE(NOW() + interval 30 day)'), // Convertir a tipo DATE
                    observaciones_temporales: 'ninguna',
                    creador: 2
                },
                {
                    id: 3,
                    cuatrimestre: 1,
                    anio_academico: 3,
                    fecha_limite: knex.raw('DATE(NOW() + interval 30 day)'), // Convertir a tipo DATE
                    observaciones_temporales: 'ninguna',
                    creador: 2
                }
            ]).onConflict('id') // Si el 'id' ya existe...
            .merge();         // ...actualiza el registro
        
  

      


// necesidad_social_seed.js

/**
 * Seeder para la tabla 'necesidad_social'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'necesidad_social'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('necesidad_social').insert([
        {
          id: 1,
          nombre: 'nombre'
        },
        {
          id: 2,
          nombre: 'nombre2'
        },
        {
          id: 3,
          nombre: 'nombre3'
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    


// datos_personales_externo_seed.js

/**
 * Seeder para la tabla 'datos_personales_externo'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'datos_personales_externo'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('datos_personales_externo').insert([
        {
          id: 1,
          correo: 'ejemplo1@ejemplo.com',
          password: '1234',
          apellidos: 'Apellido1 Apellido2',
          nombre: 'Nombre1',
          telefono: 123456789
        },
        {
          id: 2,
          correo: 'ejemplo2@ejemplo.com',
          password: '1234',
          apellidos: 'Apellido3 Apellido2',
          nombre: 'Nombre1',
          telefono: 223456789
        },
        {
          id: 3,
          correo: 'ejemplo3@ejemplo.com',
          password: '1234',
          apellidos: 'Apellido3 Apellido3',
          nombre: 'Nombre1',
          telefono: 323456789
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    


// socio_comunitario_seed.js

/**
 * Seeder para la tabla 'socio_comunitario'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'socio_comunitario'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('socio_comunitario').insert([
        {
          id: 1,
          sector: '',
          nombre_socioComunitario: 'socio1',
          datos_personales_Id: 1,
          url: '',
          mision: ''
        },
        {
          id: 2,
          sector: '',
          nombre_socioComunitario: 'socio2',
          datos_personales_Id: 2,
          url: '',
          mision: ''
        },
        {
          id: 3,
          sector: '',
          nombre_socioComunitario: 'socio3',
          datos_personales_Id: 3,
          url: '',
          mision: ''
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// demanda_servicio_seed.js

/**
 * Seeder para la tabla 'demanda_servicio'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'demanda_servicio'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('demanda_servicio').insert([
        {
          id: 1,
          creador: 1,
          ciudad: "Madrid",
          finalidad: "Apoyo educativo para niños desfavorecidos",
          periodo_definicion_ini: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().slice(0, 19).replace('T', ' '),
          periodo_definicion_fin: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().slice(0, 19).replace('T', ' '),
          periodo_ejecucion_ini: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString().slice(0, 19).replace('T', ' '),
          periodo_ejecucion_fin: new Date(new Date().setDate(new Date().getDate() + 20)).toISOString().slice(0, 19).replace('T', ' '),
          fecha_fin: new Date(new Date().setDate(new Date().getDate() + 32)).toISOString().slice(0, 19).replace('T', ' '),
          observaciones_temporales: "Se necesita disponibilidad por las tardes",
          necesidad_social: 1,
          comunidad_beneficiaria: "Niños en situación de vulnerabilidad BAJA"
        },
        {
          id: 2,
          creador: 2,
          ciudad: "Madrid",
          finalidad: "Apoyo educativo para niños superdotados",
          periodo_definicion_ini: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().slice(0, 19).replace('T', ' '),
          periodo_definicion_fin: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().slice(0, 19).replace('T', ' '),
          periodo_ejecucion_ini: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString().slice(0, 19).replace('T', ' '),
          periodo_ejecucion_fin: new Date(new Date().setDate(new Date().getDate() + 20)).toISOString().slice(0, 19).replace('T', ' '),
          fecha_fin: new Date(new Date().setDate(new Date().getDate() + 32)).toISOString().slice(0, 19).replace('T', ' '),
          observaciones_temporales: "Se necesita disponibilidad por las mañanas",
          necesidad_social: 2,
          comunidad_beneficiaria: "Niños en situación de vulnerabilidad MEDIA"
        },
        {
          id: 3,
          creador: 3,
          ciudad: "Madrid",
          finalidad: "Apoyo educativo para niños en adolescencia",
          periodo_definicion_ini: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().slice(0, 19).replace('T', ' '),
          periodo_definicion_fin: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().slice(0, 19).replace('T', ' '),
          periodo_ejecucion_ini: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString().slice(0, 19).replace('T', ' '),
          periodo_ejecucion_fin: new Date(new Date().setDate(new Date().getDate() + 20)).toISOString().slice(0, 19).replace('T', ' '),
          fecha_fin: new Date(new Date().setDate(new Date().getDate() + 32)).toISOString().slice(0, 19).replace('T', ' '),
          observaciones_temporales: "Se necesita disponibilidad por las noches",
          necesidad_social: 3,
          comunidad_beneficiaria: "Niños en situación de vulnerabilidad ALTA"
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// datos_personales_externo_seed.js

/**
 * Seeder para la tabla 'datos_personales_externo'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'datos_personales_externo'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


  await knex('colaboracion').insert([
      {
          id: 1,
          titulo: 'Titulo1',
          descripcion: 'Descripcion1',
          imagen: 'prueba1.jpg',
          admite_externos: 0,
          responsable: 1
      },
      {
          id: 2,
          titulo: 'Titulo2',
          descripcion: 'Descripcion2',
          imagen: 'prueba2.jpg',
          admite_externos: 0,
          responsable: 2
      },
      {
          id: 3,
          titulo: 'Titulo3',
          descripcion: 'Descripcion3',
          imagen: 'prueba3.jpg',
          admite_externos: 0,
          responsable: 3
      }
  ])
  .onConflict('id')
  .merge();



// partenariado_seed.js

/**
 * Seeder para la tabla 'partenariado'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'partenariado'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('partenariado').insert([
        {
          id: 1,
          id_demanda: 2,
          id_oferta: 3,
          estado: 'EN_CREACION'
        },
        {
          id: 2,
          id_demanda: 1,
          id_oferta: 1,
          estado: 'EN_CREACION'
        },
        {
          id: 3,
          id_demanda: 3,
          id_oferta: 2,
          estado: 'EN_CREACION'
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    


// aceptacionaceptada_seed.js
/**
 * Seeder para la tabla 'aceptacionaceptada'
 * 
 * Este seeder inserta datos de ejemplo en la tabla 'aceptacionaceptada'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('aceptacionaceptada').insert([
        {
          idNotificacion: 1,
          idPartenariado: 1,
          idNotificacionAceptada: 1
        },
        {
          idNotificacion: 2,
          idPartenariado: 2,
          idNotificacionAceptada: 2
        },
        {
          idNotificacion: 3,
          idPartenariado: 3,
          idNotificacionAceptada: 3
        }
      ]).onConflict('idNotificacion') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// ofertaaceptada_seed.js

/**
 * Seeder para la tabla 'ofertaaceptada'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'ofertaaceptada'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('ofertaaceptada').insert([
        {
          idNotificacion: 1,
          idOferta: 2,
          idSocio: 2
        },
        {
          idNotificacion: 2,
          idOferta: 2,
          idSocio: 2
        },
        {
          idNotificacion: 3,
          idOferta: 3,
          idSocio: 3
        }
      ]).onConflict('idNotificacion') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// aceptacionrechazado_seed.js

/**
 * Seeder para la tabla 'aceptacionrechazado'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'aceptacionrechazado'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('aceptacionrechazado').insert([
        {
          idNotificacion: 1,
          idNotificacionOferta: 1
        },
        {
          idNotificacion: 2,
          idNotificacionOferta: 2
        },
        {
          idNotificacion: 2,  
          idNotificacionOferta: 3
        }
      ]).onConflict('idNotificacion') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// admin_seed.js

/**
 * Seeder para la tabla 'admin'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'admin'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


  // Primero, limpia la tabla para evitar duplicados
  
      // Luego, inserta los registros
      await knex('admin').insert([
        {
          id: 1,
          datos_personales_Id: 1
        },
        {
          id: 2,
          datos_personales_Id: 2
        },
        {
          id: 3,
          datos_personales_Id: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// area_conocimiento_seed.js

/**
 * Seeder para la tabla 'area_conocimiento'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'area_conocimiento'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('area_conocimiento').insert([
        {
          id: 1,
          nombre: 'Programacion'
        },
        {
          id: 2,
          nombre: 'Calculo'
        },
        {
          id: 3,
          nombre: 'Algebra'
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// area_conocimiento_profesor_seed.js

/**
 * Seeder para la tabla 'areaconocimiento_profesor'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'areaconocimiento_profesor'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */



      await knex('areaconocimiento_profesor').insert([
        {
          id_area: 1,
          id_profesor: 1
        },
        {
          id_area: 2,
          id_profesor: 2
        },
        {
          id_area: 3,
          id_profesor: 3
        }
      ]).onConflict('id_area') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// estudiante_seed.js

/**
 * Seeder para la tabla 'estudiante'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'estudiante'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */



      await knex('estudiante').insert([
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    




// iniciativa_seed.js

/**
 * Seeder para la tabla 'iniciativa'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'iniciativa'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */
      await knex('iniciativa').insert([
        {
          id: 1,
          titulo: 'Ingenieria informatica',
          descripcion: 'Descripcion1',
          id_estudiante: 1,
          id_demanda: 1,
          necesidad_social: 1
        },
        {
          id: 2,
          titulo: 'Ingenieria quimica',
          descripcion: 'Descripcion2',
          id_estudiante: 2,
          id_demanda: 2,
          necesidad_social: 2
        },
        {
          id: 3,
          titulo: 'ADE',
          descripcion: 'Descripcion3',
          id_estudiante: 3,
          id_demanda: 3,
          necesidad_social: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// area_servicio_seed.js

/**
 * Seeder para la tabla 'area_servicio'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'area_servicio'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('area_servicio').insert([
        {
          id: 1,
          nombre: 'Programacion'
        },
        {
          id: 2,
          nombre: 'Calculo'
        },
        {
          id: 3,
          nombre: 'Algebra'
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// area_servicio_anuncio_servicio_seed.js

/**
 * Seeder para la tabla 'areaservicio_anuncioservicio'
 * 
 * Este seeder inserta datos de ejemplo en la tabla 'areaservicio_anuncioservicio'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('areaservicio_anuncioservicio').insert([
        {
          id_area: 1,
          id_anuncio: 1
        },
        {
          id_area: 2,
          id_anuncio: 2
        },
        {
          id_area: 3,
          id_anuncio: 3
        }
      ]).onConflict('id_area') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// area_servicio_iniciativa_seed.js

/**
 * Seeder para la tabla 'areaservicio_iniciativa'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'areaservicio_iniciativa'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('areaservicio_iniciativa').insert([
        {
          id_area: 1,
          id_iniciativa: 1
        },
        {
          id_area: 2,
          id_iniciativa: 2
        },
        {
          id_area: 3,
          id_iniciativa: 3
        }
      ]).onConflict('id_area') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// asignatura_seed.js

/**
 * Seeder para la tabla 'asignatura'
 * 
 * Este seeder inserta datos de ejemplo en la tabla 'asignatura'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('asignatura').insert([
        {
          id_oferta: 1,
          nombre: 'FAL'
        },
        {
          id_oferta: 2,
          nombre: 'TP'
        },
        {
          id_oferta: 3,
          nombre: 'ASOR'
        }
      ]).onConflict('id_oferta') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    


         // ...actualiza el registro
    

// demandarespalda_seed.js

/**
 * Seeder para la tabla 'demandarespalda'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'demandarespalda'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('demandarespalda').insert([
        {
          idNotificacion: 1,
          idPartenariado: 1
        },
        {
          idNotificacion: 2,
          idPartenariado: 2
        },
        {
          idNotificacion: 3,
          idPartenariado: 3
        }
      ]).onConflict('idNotificacion') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// universidad_seed.js

/**
 * Seeder para la tabla 'universidad'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'universidad'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('universidad').insert([
        {
          id: 1,
          nombre: 'UCM',
          provincia: 'Barcelona'
        },
        {
          id: 2,
          nombre: 'RJC',
          provincia: 'Madrid'
        },
        {
          id: 3,
          nombre: 'UNED',
          provincia: 'Madrid'
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// estudiante_externo_seed.js

/**
 * Seeder para la tabla 'estudiante_externo'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'estudiante_externo'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */



      await knex('estudiante_externo').insert([
        {
          id: 1,
          universidad: 1,
          titulacion: 'Ingenieria Informatica',
          datos_personales_Id: 1
        },
        {
          id: 2,
          universidad: 2,
          titulacion: 'ADE',
          datos_personales_Id: 2
        },
        {
          id: 3,
          universidad: 3,
          titulacion: 'Ingenieria Quimica',
          datos_personales_Id: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// titulacion_local_seed.js

/**
 * Seeder para la tabla 'titulacion_local'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'titulacion_local'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('titulacion_local').insert([
        {
          id: 1,
          nombre: 'ADE'
        },
        {
          id: 2,
          nombre: 'GII'
        },
        {
          id: 3,
          nombre: 'GIC'
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// estudiante_interno_seed.js

/**
 * Seeder para la tabla 'estudiante_interno'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'estudiante_interno'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('estudiante_interno').insert([
        {
          id: 1,
          titulacion_local: 1,
          datos_personales_Id: 1
        },
        {
          id: 2,
          titulacion_local: 2,
          datos_personales_Id: 2
        },
        {
          id: 3,
          titulacion_local: 3,
          datos_personales_Id: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// proyecto_seed.js

/**
 * Seeder para la tabla 'proyecto'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'proyecto'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('proyecto').insert([
        { id: 1, id_partenariado: 1, estado: 'ABIERTO_ESTUDIANTES', url: '' },
        { id: 2, id_partenariado: 2, estado: 'ABIERTO_ESTUDIANTES', url: '' },
        { id: 3, id_partenariado: 3, estado: 'ABIERTO_ESTUDIANTES', url: '' }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    


// estudiante_proyecto_seed.js

/**
 * Seeder para la tabla 'estudiante_proyecto'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'estudiante_proyecto'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('estudiante_proyecto').insert([
        {
          id_estudiante: 1,
          id_proyecto: 1
        },
        {
          id_estudiante: 2,
          id_proyecto: 2
        },
        {
          id_estudiante: 3,
          id_proyecto: 3
        }
      ]).onConflict('id_estudiante') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro


// iniciativa_seed.js

/**
 * Seeder para la tabla 'iniciativa'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'iniciativa'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('iniciativa').insert([
        {
          id: 1,
          titulo: 'Ingenieria informatica',
          descripcion: 'Descripcion1',
          id_estudiante: 1,
          id_demanda: 1,
          necesidad_social: 1
        },
        {
          id: 2,
          titulo: 'Ingenieria quimica',
          descripcion: 'Descripcion2',
          id_estudiante: 2,
          id_demanda: 2,
          necesidad_social: 2
        },
        {
          id: 3,
          titulo: 'ADE',
          descripcion: 'Descripcion3',
          id_estudiante: 3,
          id_demanda: 3,
          necesidad_social: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
  


// matching_seed.js

/**
 * Seeder para la tabla 'matching'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'matching'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('matching').insert([
        {
          id_oferta: 1,
          id_demanda: 1,
          procesado: 0,
          emparejamiento: 0.0
        },
        {
          id_oferta: 2,
          id_demanda: 2,
          procesado: 1,
          emparejamiento: 2.0
        },
        {
          id_oferta: 3,
          id_demanda: 3,
          procesado: 0,
          emparejamiento: 6.0
        }
      ]).onConflict('id_oferta') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// matching_areas_seed.js

/**
 * Seeder para la tabla 'matching_areas'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'matching_areas'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('matching_areas').insert([
        {
          id: 1,
          area_conocimiento: '',
          area_servicio: ''
        },
        {
          id: 2,
          area_conocimiento: '',
          area_servicio: ''
        },
        {
          id: 3,
          area_conocimiento: '',
          area_servicio: ''
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// matching_areaservicio_titulacion_seed.js

/**
 * Seeder para la tabla 'matching_areaservicio_titulacion'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'matching_areaservicio_titulacion'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

        await knex('matching_areaservicio_titulacion').insert([
          {
            id: 1,
            area_servicio: 'ECONOMIA',
            titulacion: 'ADE'
          },
          {
            id: 2,
            area_servicio: 'INDUSTRIA',
            titulacion: 'Industriañes'
          },
          {
            id: 3,
            area_servicio: 'ARQUITECTURA',
            titulacion: 'Arquitectura'
          }
        ]).onConflict('id') // Si el 'id' ya existe...
        .merge();         // ...actualiza el registro
      



// mensaje_seed.js

/**
 * Seeder para la tabla 'mensaje'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'mensaje'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('mensaje').insert([
        {
          id: 1,
          texto: 'nombre',
          fecha: knex.raw("NOW() - INTERVAL 5 DAY"),
          usuario: 1
        },
        {
          id: 2,
          texto: 'nombre1',
          fecha: knex.raw("NOW() - INTERVAL 7 DAY"),
          usuario: 2
        },
        {
          id: 3,
          texto: 'nombre2',
          fecha: knex.raw("NOW() - INTERVAL 11 DAY"),
          usuario: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// mensaje_anuncioservicio_seed.js

/**
 * Seeder para la tabla 'mensaje_anuncioservicio'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'mensaje_anuncioservicio'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('mensaje_anuncioservicio').insert([
        {
          id_mensaje: 1,
          id_anuncio: 1
        },
        {
          id_mensaje: 2,
          id_anuncio: 2
        },
        {
          id_mensaje: 3,
          id_anuncio: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// mensaje_colaboracion_seed.js

/**
 * Seeder para la tabla 'mensaje_colaboracion'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'mensaje_colaboracion'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('mensaje_colaboracion').insert([
        {
          id_mensaje: 1,
          id_colaboracion: 1
        },
        {
          id_mensaje: 2,
          id_colaboracion: 2
        },
        {
          id_mensaje: 3,
          id_colaboracion: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro    



// newsletter_seed.js

/**
 * Seeder para la tabla 'newsletter'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'newsletter'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('newsletter').insert([
        {
          id: 1,
          mail_to: 'nombre',
          created_at: knex.fn.now(), // Utiliza la fecha y hora actual
          updated_at: knex.fn.now() // Utiliza la fecha y hora actual
        },
        {
          id: 2,
          mail_to: 'nombre1',
          created_at: knex.fn.now(), // Utiliza la fecha y hora actual
          updated_at: knex.fn.now() // Utiliza la fecha y hora actual
        },
        {
          id: 3,
          mail_to: 'nombre2',
          created_at: knex.fn.now(), // Utiliza la fecha y hora actual
          updated_at: knex.fn.now() // Utiliza la fecha y hora actual
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// notas_seed.js

/**
 * Seeder para la tabla 'notas'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'notas'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('notas').insert([
        {
          id: 1,
          id_estudiante: 1,
          id_proyecto: 1,
          nota: 7.0
        },
        {
          id: 2,
          id_estudiante: 2,
          id_proyecto: 2,
          nota: 4.0
        },
        {
          id: 3,
          id_estudiante: 3,
          id_proyecto: 3,
          nota: 5.0
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// notificacionmatching_seed.js

/**
 * Seeder para la tabla 'notificacionmatching'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'notificacionmatching'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('notificacionmatching').insert([
        {
          idNotificacion: 1,
          idOferta: 1,
          idDemanda: 1
        },
        {
          idNotificacion: 2,
          idOferta: 2,
          idDemanda: 2
        },
        {
          idNotificacion: 3,
          idOferta: 3,
          idDemanda: 3
        }
      ]).onConflict('idNotificacion') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// tags_seed.js

/**
 * Seeder para la tabla 'tags'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'tags'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('tags').insert([
        {
          id: 1,
          nombre: 'tag1'
        },
        {
          id: 2,
          nombre: 'tag2'
        },
        {
          id: 3,
          nombre: 'tag3'
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// oferta_demanda_tags_seed.js

/**
 * Seeder para la tabla 'oferta_demanda_tags'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'oferta_demanda_tags'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('oferta_demanda_tags').insert([
        {
          object_id: 1,
          tag_id: 1,
          tipo: ''
        },
        {
          object_id: 2,
          tag_id: 2,
          tipo: ''
        },
        {
          object_id: 3,
          tag_id: 3,
          tipo: ''
        }
      ]).onConflict('object_id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// oficinaaps_seed.js

/**
 * Seeder para la tabla 'oficinaaps'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'oficinaaps'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('oficinaaps').insert([
        {
          id: 1,
          datos_personales_id: 1
        },
        {
          id: 2,
          datos_personales_id: 2
        },
        {
          id: 3,
          datos_personales_id: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// partenariadorellenado_seed.js

/**
 * Seeder para la tabla 'partenariadorellenado'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'partenariadorellenado'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('partenariadorellenado').insert([
        {
          idNotificacion: 1,
          idPartenariado: 2
        },
        {
          idNotificacion: 2,
          idPartenariado: 1
        },
        {
          idNotificacion: 3,
          idPartenariado: 3
        }
      ]).onConflict('idNotificacion') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    
// previo_partenariado_seed.js

/**
 * Seeder para la tabla 'previo_partenariado'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'previo_partenariado'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('previo_partenariado').insert([
        {
          id: 1,
          id_demanda: 1,
          id_oferta: 1,
          completado_profesor: 0,
          completado_socioCOmunitario: 0
        },
        {
          id: 2,
          id_demanda: 2,
          id_oferta: 2,
          completado_profesor: 0,
          completado_socioCOmunitario: 0
        },
        {
          id: 3,
          id_demanda: 3,
          id_oferta: 3,
          completado_profesor: 0,
          completado_socioCOmunitario: 0
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// profesor_externo_seed.js

/**
 * Seeder para la tabla 'profesor_externo'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'profesor_externo'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('profesor_externo').insert([
        {
          id: 1,
          universidad: 1,
          facultad: 'Turismo',
          datos_personales_id: 1
        },
        {
          id: 2,
          universidad: 2,
          facultad: 'Informatica',
          datos_personales_id: 2
        },
        {
          id: 3,
          universidad: 3,
          facultad: 'Economicas',
          datos_personales_id: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// profesor_colaboracion_seed.js

/**
 * Seeder para la tabla 'profesor_interno'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'profesor_interno'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('profesor_colaboracion').insert([
        {
          id_profesor: 1,
          id_colaboracion: 1
        },
        {
          id_profesor: 2,
          id_colaboracion: 2
        },
        {
          id_profesor: 3,
          id_colaboracion: 3
        }
      ]).onConflict('id_profesor') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// profesor_interno_oferta_seed.js

/**
 * Seeder para la tabla 'profesorinterno_oferta'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'profesorinterno_oferta'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('profesorinterno_oferta').insert([
        { id_profesor: 1, id_oferta: 1 },
        { id_profesor: 2, id_oferta: 2 },
        { id_profesor: 3, id_oferta: 3 }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// titulacion_localseed.js

/**
 * Seeder para la tabla 'titulacionlocal_profesor'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'titulacionlocal_profesor'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('titulacion_local').insert([
        {
          id: 1,
          nombre: 'Pepe'
        },
        {
          id: 2,
          nombre: 'Luis'
        },
        {
          id: 3,
          nombre: 'Alfredo'
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// titulacionlocal_demanda_seed.js

/**
 * Seeder para la tabla 'titulacionlocal_demanda'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'titulacionlocal_demanda'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('titulacionlocal_demanda').insert([
        {
          id_titulacion: 1,
          id_demanda: 1
        },
        {
          id_titulacion: 2,
          id_demanda: 2
        },
        {
          id_titulacion: 3,
          id_demanda: 3
        }
      ]).onConflict('id_titulacion') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// titulacionlocal_profesor_seed.js

/**
 * Seeder para la tabla 'titulacionlocal_profesor'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'titulacionlocal_profesor'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('titulacionlocal_profesor').insert([
        {
          id_titulacion: 1,
          id_profesor: 1
        },
        {
          id_titulacion: 2,
          id_profesor: 2
        },
        {
          id_titulacion: 3,
          id_profesor: 3
        }
      ]).onConflict('id_titulacion') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
        



// profesor_interno_seed.js

/**
 * Seeder para la tabla 'profesor_interno'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'profesor_interno'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('tutor').insert([
        {
          id: 1,
          datos_personales_Id: 1
        },
        {
          id: 2,
          datos_personales_Id: 2  
        },
        {
          id: 3,
          datos_personales_Id: 3
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// upload_seed.js

/**
 * Seeder para la tabla 'upload'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'upload'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */


      await knex('upload').insert([
        {
          id: 1,
          almacenamiento: '',
          tipo: '',
          campo: '',
          tipo_id: '',
          path: '',
          client_name: '',
          nombre: 'nombre',
          creador: 1,
          createdAt: knex.raw("NOW() - INTERVAL 15 DAY"),
          updatedAt: knex.raw("NOW() - INTERVAL 13 DAY"),
          _v: 1.0
        },
        {
          id: 2,
          almacenamiento: '',
          tipo: '',
          campo: '',
          tipo_id: '',
          path: '',
          client_name: '',
          nombre: 'nombre2',
          creador: 2,
          createdAt: knex.raw("NOW() - INTERVAL 13 DAY"),
          updatedAt: knex.raw("NOW() - INTERVAL 11 DAY"),
          _v: 1.0
        },
        {
          id: 3,
          almacenamiento: '',
          tipo: '',
          campo: '',
          tipo_id: '',
          path: '',
          client_name: '',
          nombre: 'nombre3',
          creador: 3,
          createdAt: knex.raw("NOW() - INTERVAL 11 DAY"),
          updatedAt: knex.raw("NOW() - INTERVAL 9 DAY"),
          _v: 1.0
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// upload_anuncio_servicio_seed.js

/**
 * Seeder para la tabla 'upload_autoservicio'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'upload_autoservicio'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('upload_anuncioservicio').insert([
        {
          id_upload: 1,
          id_anuncio: 1
        },
        {
          id_upload: 2,
          id_anuncio: 2
        },
        {
          id_upload: 3,
          id_anuncio: 3
        }
      ]).onConflict('id_upload') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// ulopads_colaboracion_seed.js

/**
 * Seeder para la tabla 'ulopad_colaboracion'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'ulopad_colaboracion'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */
           
      await knex('uploads_colaboracion').insert([
        {
          id_upload: 1,
          id_colaboracion: 1
        },
        {
          id_upload: 2,
          id_colaboracion: 2
        },
        {
          id_upload: 3,
          id_colaboracion: 3
        }
      ]).onConflict('id_upload') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    

    }