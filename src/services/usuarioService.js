import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'
import pkg from 'pg'

const usuarioTabla = process.env.DB_TABLA_USUARIO;


export class usuarioService{
    createUsuario = async (Usuario) => {
        console.log('Create New Usuario in usuario Service');

        const { Pool } = pkg;
        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    rejectUnauthorized: false
                }
            })
        const query=`INSERT INTO ${usuarioTabla} (email, contraseña) VALUES ('${Usuario.email}', '${Usuario.contraseña}')`;
        const query2=`SELECT MAX(id_usuario) as id_usuario from ${usuarioTabla}`
        console.log(query)
        console.log(query2)
        let response= await pool.query(query);
        response= await pool.query(query2);
        console.log(response.rows)
        return response.rows[0]
    }


    getUsuario = async(usuario) => {
        const { Pool } = pkg;

        const pool = new Pool(
            {
                connectionString:   process.env.DB_SERVER,
                ssl: {
                    rejectUnauthorized: false
                }
            })
        console.log('This is a function on the service');
        let response = 0
        const query = `SELECT id_usuario from ${usuarioTabla} WHERE email ='${usuario.email}' and contraseña ='${usuario.contraseña}'`
        response = await pool.query(query)
        pool.end()
        console.log(response.rows)
        return response.rows;
    }

    




}