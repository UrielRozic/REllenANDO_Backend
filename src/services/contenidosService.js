import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const contenidosTabla = process.env.DB_TABLA_CONTENIDOS;
const juegosTabla = process.env.DB_TABLA_JUEGOS;
const preguntasTabla = process.env.DB_TABLA_PREGUNTAS;
const respuestasTabla = process.env.DB_TABLA_RESPUESTAS;

export class contenidosService{

    getJuego = async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            
            .query(`SELECT * from ${juegosTabla} INNER JOIN ${contenidosTabla} ON juegos.Id_Juego = ${contenidosTabla}.Id_Contenido`);
        console.log(response)

        return response.recordset;
        
    }

    getPregunta = async () => {
        console.log('This is a function on the service');
        
        const pool = await sql.connect(config);
        console.log("entre")
        const response = await pool.request()
        .query(`SELECT * from ${preguntasTabla} INNER JOIN ${contenidosTabla} ON preguntas.Id_Pregunta = ${contenidosTabla}.Id_Contenido`)
        console.log("entre2")
            
        console.log(response)

        return response.recordset;
        
    }

    getJuegoById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${juegosTabla} INNER JOIN ${contenidosTabla} ON juegos.Id_Juego = ${contenidosTabla}.Id_Contenido where Id_Juego = @id`);
        console.log(response)

        return response.recordset[0];
    }

    getContenido = async (contenido) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('contenido',sql.VarChar, contenido)
            .query(`SELECT * from ${contenidosTabla} where contenido = @contenido `);
        console.log(response)

        return response.recordset;
        
    }

    getContenidoById = async (id, contenido) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .input('contenido',sql.VarChar, contenido)
            .query(`SELECT * from ${contenidosTabla} where Id_Juego = @id && contenido = @contenido`);
        console.log(response)

        return response.recordset[0];
    }


    getPreguntaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${preguntasTabla} INNER JOIN ${contenidosTabla} ON preguntas.Id_Contenido = ${contenidosTabla}.Id_Contenido where Id_Pregunta = @id`);
        console.log(response)

        return response.recordset;
        
    }



    



}