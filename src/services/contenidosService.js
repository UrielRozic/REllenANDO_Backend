import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const contenidosTabla = process.env.DB_TABLA_CONTENIDOS;
const juegosTabla = process.env.DB_TABLA_JUEGOS;

export class contenidosService{

    getJuego = async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            
            .query(`SELECT * from ${juegosTabla} INNER JOIN ${contenidosTabla} ON juegos.Id_Juego = ${contenidosTabla}.Id_Contenido`);
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



}