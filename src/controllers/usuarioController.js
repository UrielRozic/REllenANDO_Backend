import { Router } from 'express';
import { usuarioService } from '../services/usuarioService.js';
import { tokenService } from '../services/tokenService.js';

const router = Router();
const UsuarioService = new usuarioService();
const TokenService = new tokenService();

router.post('/login', async(req, res) => { 
    console.log(`This is a post operation`);
    try {
        const usuario = await UsuarioService.getUsuario(req.body);
        if (usuario[0] === undefined) {
            return res.status(404).json("Error en el loguearse");
        } else {
            const id = usuario[0].id_usuario
            const token = TokenService.getToken(id)
            return res.status(200).json({ token, id });
        }
    }catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
});

router.post('/register', async(req, res) => { 
    console.log(`This is a post operation`);
  if(!req.body.email || !req.body.contraseña){
    return res.status(400).json("Llenar todos los datos");
  }
  else{
    const usuario = await UsuarioService.createUsuario(req.body);
    return res.status(201).json(usuario);
  }
});


 
 

  

  export default router;