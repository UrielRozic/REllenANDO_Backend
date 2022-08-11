import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'
import pkg from 'pg'

const contenidosTabla = process.env.DB_TABLA_CONTENIDOS;
const juegosTabla = process.env.DB_TABLA_JUEGOS;
const preguntasTabla = process.env.DB_TABLA_PREGUNTAS;
const respuestasTabla = process.env.DB_TABLA_RESPUESTAS;

export class contenidosService{

    getJuego = async () => {
        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    rejectUnauthorized: false
                }
            })



            response = await pool.query(`SELECT * from ${juegosTabla} INNER JOIN ${contenidosTabla} ON juegos.Id_Juego = ${contenidosTabla}.Id_Contenido`)




            pool.end()


        return response.recordset;
        
    }

    getPregunta = async () => {

        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    rejectUnauthorized: false
                }
            })



            response = await pool.query(`SELECT * from ${preguntasTabla} INNER JOIN ${contenidosTabla} ON preguntas.Id_Contenido = ${contenidosTabla}.Id_Contenido`)




            pool.end()


        return response.recordset;

        
        
    }

    getJuegoById = async (id) => {

        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    rejectUnauthorized: false
                }
            })



            response = await pool.query(`SELECT * from ${juegosTabla} INNER JOIN ${contenidosTabla} ON juegos.Id_Juego = ${contenidosTabla}.Id_Contenido where Id_Juego = @id`)




            pool.end()


        return response.recordset[0];

    }

    getContenido = async (contenido) => {

        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    rejectUnauthorized: false
                }
            })



            response = await pool.query(`SELECT * from ${contenidosTabla} where contenido = @contenido `)




            pool.end()


        return response.recordset;
        
        
    }

    getContenidoById = async (id, contenido) => {
        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    rejectUnauthorized: false
                }
            })



            response = await pool.query(`SELECT * from ${contenidosTabla} where Id_Juego = @id && contenido = @contenido`)




            pool.end()


        return response.recordset[0];
    }


    getPreguntaById = async (id) => {

        console.log('This is a function on the service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    rejectUnauthorized: false
                }
            })



            response = await pool.query(`SELECT * from ${preguntasTabla} INNER JOIN ${contenidosTabla} ON preguntas.Id_Contenido = ${contenidosTabla}.Id_Contenido where Id_Pregunta = @id`)




            pool.end()


        return response.recordset;
        
    }



    



}