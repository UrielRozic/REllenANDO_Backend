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
        const query=`INSERT INTO ${Usuario} (email, contraseña) VALUES (?, ?)`;
        const query2=`select * from ${Usuario} where email=?`
        let response= await pool.query(query2,[email]);
        console.log(response)
        if(responsetype[0].tipo==true){
            let response2 = await pool.query(query,[Usuario.email, Usuario.contraseña]);
            
            console.log(response2);
            return response2.rows;
        }
        else{
            return "Fallo";
        }
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
        const query = `SELECT id_usuario from ${usuarioTabla} WHERE email='${usuarioTabla.email}' and contraseña='${usuarioTabla.contraseña}'`
        response = await pool.query(query)
        pool.end()
        console.log(response.rows)
        return response.rows;
    }

    




}