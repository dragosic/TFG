/**
 * Seeder para las tablas 'usuario' y 'notificaciones'
 */
import bcrypt from 'bcryptjs';

export async function seed(knex) {
  await knex('usuario').insert([
    {
      id: 1,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 2,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 3,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 4,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 5,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 6,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 7,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 8,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 9,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 10,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 11,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 12,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 13,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    
    {
      id: 14,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 15,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 16,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 20,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 21,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 22,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    
    {
      id: 155,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 156,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 157,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    
    {
      id: 160,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 161,
      origin_login: 'seed',
      origin_img: '',
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
      terminos_aceptados: 1
    },
    {
      id: 162,
      origin_login: 'seed',
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
 


  const saltRounds = 10;

  const usuarios = [
    {
      id: 1,
      correo: 'interno1@ejemplo.com',
      password: '12345678',
      apellidos: '1',
      nombre: 'Admin',
      telefono: 123456789
    },
    {
      id: 2,
      correo: 'interno2@ejemplo.com',
      password: '12345678',
      apellidos: '2',
      nombre: 'Admin',
      telefono: 223456789
    },
    {
      id: 3,
      correo: 'interno3@ejemplo.com',
      password: '12345678',
      apellidos: '3',
      nombre: 'Admin',
      telefono: 323456789
    },
    {
      id: 10,
      correo: 'oaps1@aps.es',
      password: '12345678',
      apellidos: 'APS 1',
      nombre: 'Oficina',
      telefono: 123456789
    },
    {
      id: 11,
      correo: 'oaps2@aps.es',
      password: '12345678',
      apellidos: 'APS 2',
      nombre: 'Oficina',
      telefono: 223456789
    },
    {
      id: 12,
      correo: 'oaps3@aps.es',
      password: '12345678',
      apellidos: 'APS 3',
      nombre: 'Oficina',
      telefono: 323456789
    },
    {
      id: 14,
      correo: 'profInt1@aps.es',
      password: '12345678',
      apellidos: 'Interno 1',
      nombre: 'Profesor',
      telefono: 123456789
    },
    {
      id: 15,
      correo: 'profInt2@aps.es',
      password: '12345678',
      apellidos: 'Interno 2',
      nombre: 'Profesor',
      telefono: 223456789
    },
    {
      id: 16,
      correo: 'profInt3@aps.es',
      password: '12345678',
      apellidos: 'Interno 3',
      nombre: 'Profesor',
      telefono: 323456789
    },
    {
      id: 155,
      correo: 'estInter1@aps.es',
      password: '12345678',
      apellidos: 'Interno 1',
      nombre: 'Estudiante',
      telefono: 123456789
    },
    {
      id: 156,
      correo: 'estInter2@aps.es',
      password: '12345678',
      apellidos: 'Interno 2',
      nombre: 'Estudiante',
      telefono: 223456789
    },
    {
      id: 157,
      correo: 'estInter3@aps.es',
      password: '12345678',
      apellidos: 'Interno 3',
      nombre: 'Estudiante',
      telefono: 323456789
    }
  ];

  // Hashear contraseñas antes de insertar
  const usuariosConHash = await Promise.all(
    usuarios.map(async (usuario) => {
      const hash = await bcrypt.hash(usuario.password, saltRounds);
      return { ...usuario, password: hash };
    })
  );

  // Insertar en la base de datos con Knex
  await knex('datos_personales_interno')
    .insert(usuariosConHash)
    .onConflict('id')
    .merge();
   
  
  
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
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
          { id: 9 },
          { id: 13 },
          { id: 14 },
          { id: 15 },
          { id: 16 }
        ]).onConflict('id') // Si el 'id' ya existe...
        .ignore();         // ...actualiza el registro
  
  
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
            id: 13,
            datos_personales_Id: 13
          },
          {
            id: 14,
            datos_personales_Id: 14
          },
          {
            id: 15,
            datos_personales_Id: 15
          },
          {
            id: 16,
            datos_personales_Id: 16
          }
        ]).onConflict('id') // Si el 'id' ya existe...
        .ignore();         // ...actualiza el registro
      
  
  

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
  


  // Luego, inserta los registros
  await knex('oferta_servicio').insert([
      {
          id: 1,
          cuatrimestre: 2,
          anio_academico: 3,
          fecha_limite: knex.raw('DATE(NOW() + interval 30 day)'), // Convertir a tipo DATE
          observaciones_temporales: 'ninguna',
          creador: 14
      },
      {
          id: 2,
          cuatrimestre: 2,
          anio_academico: 3,
          fecha_limite: knex.raw('DATE(NOW() + interval 30 day)'), // Convertir a tipo DATE
          observaciones_temporales: 'ninguna',
          creador: 15
      },
      {
          id: 3,
          cuatrimestre: 1,
          anio_academico: 3,
          fecha_limite: knex.raw('DATE(NOW() + interval 30 day)'), // Convertir a tipo DATE
          observaciones_temporales: 'ninguna',
          creador: 16
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

      const usuarios_ext = [
        {
          id: 4,
          correo: 'tutor1@ejemplo.com',
          password: '12345678',
          apellidos: 'CA 1',
          nombre: 'Tutor',
          telefono: 123456789
        },
        {
          id: 5,
          correo: 'tutor2@ejemplo.com',
          password: '12345678',
          apellidos: 'CA 2',
          nombre: 'Tutor',
          telefono: 223456789
        },
        {
          id: 6,
          correo: 'tutor3@ejemplo.com',
          password: '12345678',
          apellidos: 'CA 3',
          nombre: 'Tutor',
          telefono: 223456789
        },
        {
          id: 7,
          correo: 'externo1@ejemplo.com',
          password: '12345678',
          apellidos: 'Externo 1',
          nombre: 'Profesor',
          telefono: 123456789
        },
        {
          id: 8,
          correo: 'externo2@ejemplo.com',
          password: '12345678',
          apellidos: 'Externo 2',
          nombre: 'Profesor',
          telefono: 223456789
        },
        {
          id: 9,
          correo: 'externo3@ejemplo.com',
          password: '12345678',
          apellidos: 'Externo 3',
          nombre: 'Profesor',
          telefono: 323456789
        },
        {
          id: 13,
          correo: 'c@aps.com',
          password: '12345678',
          apellidos: 'Colaborador',
          nombre: 'Colaborador',
          telefono: 323456789
        },
        {
          id: 20,
          correo: 's1@aps.es',
          password: '12345678',
          apellidos: '1',
          nombre: 'Socio',
          telefono: 123456789
        },
        {
          id: 21,
          correo: 's2@aps.es',
          password: '12345678',
          apellidos: '2',
          nombre: 'Socio',
          telefono: 223456789
        },
        {
          id: 22,
          correo: 's3@aps.es',
          password: '12345678',
          apellidos: '3',
          nombre: 'Socio',
          telefono: 323456789
        },
        {
          id: 160,
          correo: 'estExt1@aps.es',
          password: '12345678',
          apellidos: 'Externo 1',
          nombre: 'Estudiante',
          telefono: 123456789
        },
        {
          id: 161,
          correo: 'estExt2@aps.es',
          password: '12345678',
          apellidos: 'Externo 2',
          nombre: 'Estudiante',
          telefono: 223456789
        },
        {
          id: 162,
          correo: 'estExt3@aps.es',
          password: '12345678',
          apellidos: 'Externo 3',
          nombre: 'Estudiante',
          telefono: 323456789
        }
      ];
    
      // Hashear contraseñas antes de insertar
      const usuarios_extConHash = await Promise.all(
        usuarios_ext.map(async (usuario) => {
          const hash = await bcrypt.hash(usuario.password, saltRounds);
          return { ...usuario, password: hash };
        })
      );
    
      // Insertar en la base de datos con Knex
      await knex('datos_personales_externo')
        .insert(usuarios_extConHash)
        .onConflict('id')
        .merge();

// socio_comunitario_seed.js

/**
 * Seeder para la tabla 'socio_comunitario'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'socio_comunitario'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('socio_comunitario').insert([
        {
          id: 20,
          sector: '',
          nombre_socioComunitario: 'socio1',
          datos_personales_Id: 20,
          url: '',
          mision: ''
        },
        {
          id: 21,
          sector: '',
          nombre_socioComunitario: 'socio2',
          datos_personales_Id: 21,
          url: '',
          mision: ''
        },
        {
          id: 22,
          sector: '',
          nombre_socioComunitario: 'socio3',
          datos_personales_Id: 22,
          url: '',
          mision: ''
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    





      await knex('demanda_servicio').insert([
        {
          id: 1,
          creador: 20,
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
          creador: 21,
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
          creador: 22,
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
          id_profesor: 7
        },
        { 
          id_area: 2,
          id_profesor: 8
        },
        {  
          id_area: 3,
          id_profesor: 9
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
        { id: 155 },
        { id: 156 },
        { id: 157 },
        { id: 160 },
        { id: 161 },
        { id: 162 }
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
    
  

  await knex('colaborador').insert([
    {
      id: 13,
      universidad: 1,
      facultad: 'Facultad de Ciencias',
      datos_personales_Id: 13
    }
  ]).onConflict('id').merge(); // Actualiza si el id ya existe



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
          id: 160,
          universidad: 1,
          titulacion: 'Ingenieria Informatica',
          datos_personales_Id: 160
        },
        {
          id: 161,
          universidad: 2,
          titulacion: 'ADE',
          datos_personales_Id: 161
        },
        {
          id: 162,
          universidad: 3,
          titulacion: 'Ingenieria Quimica',
          datos_personales_Id: 162
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
          id: 155,
          titulacion_local: 1,
          datos_personales_Id: 155
        },
        {
          id: 156,
          titulacion_local: 2,
          datos_personales_Id: 156
        },
        {
          id: 157,
          titulacion_local: 3,
          datos_personales_Id: 157
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
          id_estudiante: 155,
          id_proyecto: 1
        },
        {
          id_estudiante: 156,
          id_proyecto: 2
        },
        {
          id_estudiante: 157,
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
          mail_to: 's1@aps.es',
          created_at: knex.fn.now(), // Utiliza la fecha y hora actual
          updated_at: knex.fn.now() // Utiliza la fecha y hora actual
        },
        {
          id: 2,
          mail_to: 's2@aps.es',
          created_at: knex.fn.now(), // Utiliza la fecha y hora actual
          updated_at: knex.fn.now() // Utiliza la fecha y hora actual
        },
        {
          id: 3,
          mail_to: 's3@aps.es',
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
          id: 155,
          id_estudiante: 155,
          id_proyecto: 1,
          nota: 7.0
        },
        {
          id: 156,
          id_estudiante: 156,
          id_proyecto: 2,
          nota: 4.0
        },
        {
          id: 157,
          id_estudiante: 157,
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
          id: 10,
          datos_personales_id: 10
        },
        {
          id: 11,
          datos_personales_id: 11
        },
        {
          id: 12,
          datos_personales_id: 12
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
    

      await knex('profesor_externo').insert([
        {
          id: 4,
          universidad: 3,
          facultad: 'Turismo',
          datos_personales_id: 5
        },
        {
          id: 5,
          universidad: 3,
          facultad: 'Informatica',
          datos_personales_id: 5
        },
        {
          id: 6,
          universidad: 3,
          facultad: 'Economicas',
          datos_personales_id: 6
        },
        {
          id: 7,
          universidad: 1,
          facultad: 'Turismo',
          datos_personales_id: 7
        },
        {
          id: 8,
          universidad: 2,
          facultad: 'Informatica',
          datos_personales_id: 8
        },
        {
          id: 9,
          universidad: 3,
          facultad: 'Economicas',
          datos_personales_id: 9
        }
      ]).onConflict('id') // Si el 'id' ya existe...
      .merge();         // ...actualiza el registro
    



// profesor_colaboracion_seed.js

/**
 * Seeder para la tabla 'profesor_colaboracion'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'profesor_colaboracion'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

      await knex('profesor_colaboracion').insert([
        {
          id_profesor: 14,
          id_colaboracion: 1
        },
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
  { id_profesor: 4, id_oferta: 1 },
  { id_profesor: 5, id_oferta: 2 }
]).onConflict(['id_profesor', 'id_oferta']).ignore(); // <-- cambia esto también



// titulacion_localseed.js

/**
 * Seeder para la tabla 'titulacion_local'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'titulacion_local'.
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
          id_profesor: 4
        },
        {
          id_titulacion: 2,
          id_profesor: 5
        }
      ]).onConflict(['id_titulacion','id_profesor']) // Si el 'id' ya existe...
      .ignore();         // ...actualiza el registro
        



// profesor_interno_seed.js

/**
 * Seeder para la tabla 'profesor_interno'
 *
 * Este seeder inserta datos de ejemplo en la tabla 'profesor_interno'.
 * Se utiliza Knex.js para interactuar con la base de datos.
 */

  await knex('tutor').insert([
    { id: 4, datos_personales_Id: 4 },
    { id: 5, datos_personales_Id: 5 },
    { id: 6, datos_personales_Id: 6 }
  ]).onConflict('id')
  .merge();

    



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