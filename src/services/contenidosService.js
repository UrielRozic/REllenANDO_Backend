import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'
import pkg from 'pg'

const contenidosTabla = process.env.DB_TABLA_CONTENIDOS;
const juegosTabla = process.env.DB_TABLA_JUEGOS;
const preguntasTabla = process.env.DB_TABLA_PREGUNTAS;

export class contenidosService{

    getJuego = async () => {
        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    required: true,
                    rejectUnauthorized: false
                }
            })


            const query=`SELECT * from ${juegosTabla} INNER JOIN ${contenidosTabla} ON ${juegosTabla}.id_juego = ${contenidosTabla}.id_contenido`
            console.log(query)
            let response = await pool.query(query)
            console.log(response);




            pool.end()


        return response.rows;
        
    }

    getPregunta = async () => {

        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    required: true,
                    rejectUnauthorized: false
                }
            })


            const query=`SELECT * from ${preguntasTabla} INNER JOIN ${contenidosTabla} ON ${preguntasTabla}.id_contenido = ${contenidosTabla}.id_contenido`
            console.log(query);
            let response = await pool.query(query)




            pool.end()


        return response.rows;

        
        
    }

    getJuegoById = async (id) => {

        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    required: true,
                    rejectUnauthorized: false
                }
            })


            const query=`SELECT * from ${juegosTabla} INNER JOIN ${contenidosTabla} ON juegos.id_juego = ${contenidosTabla}.id_contenido where id_juego = ${id}`
            let response = await pool.query(query)




            pool.end()


        return response.rows[0];

    }

    getContenido = async (contenido) => {

        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    required: true,
                    rejectUnauthorized: false
                }
            })


            const query=`SELECT * from ${contenidosTabla} where contenido = '${contenido}' `
            console.log(query);
            let response = await pool.query(query)

            pool.end()


        return response.rows;
        
        
    }

    getContenidoById = async (id, contenido) => {
        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    required: true,
                    rejectUnauthorized: false
                }
            })




           const query=`SELECT * from ${contenidosTabla} where id_contenido = ${id}`
           let response = await pool.query(query)




            pool.end()


        return response.rows[0];
    }


    getPreguntaById = async (id) => {

        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    required: true,
                    rejectUnauthorized: false
                }
            })


            const query=`SELECT * from ${preguntasTabla} INNER JOIN ${contenidosTabla} ON preguntas.id_contenido = ${contenidosTabla}.id_contenido where id_pregunta = ${id}`
            let response = await pool.query(query)




            pool.end()


        return response.rows;
        
    }

    createContenido = async (Contenido) => {
        

        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    required: true,
                    rejectUnauthorized: false
                }
            })

        const query=`INSERT INTO ${contenidosTabla}(contenido, descripcion, edad, titulo) VALUES ('${Contenido.contenido}', '${Contenido.descripcion}', '${Contenido.edad}', '${Contenido.titulo}')`
        let response = await pool.query(query);
        console.log(response)

        return response.rows;
    }



    



}