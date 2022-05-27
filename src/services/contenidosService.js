import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

//const contenidosTabla = process.env.DB_TABLA_CONTENIDOS;

export class contenidosService{

    getJuego = async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${juegosTabla} left join ${contenidosTabla} on juegosTabla.id = contenidosTabla.id `);
        console.log(response)

        return response.recordset[0];
        
    }

}