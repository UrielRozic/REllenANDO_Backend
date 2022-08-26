import { Router } from 'express';
import { usuarioService } from '../services/usuarioService.js';

const router = Router();
const UsuarioService = new usuarioService();

router.post('/logIn', async(req, res) => { 
    console.log(`This is a post operation`);
    try {
        const usuario = await UsuarioService.getUsuario(req.body);
        if (usuario[0] === undefined) {
            return res.status(404).json("Error en el loguearse");
        } else {
            const id = usuario[0].id_usuario
            const token = authService.getToken(id)
            return res.status(200).json({ token, id });
        }
    }catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
});


 


 

  

  export default router;