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
      if (!usuario[0]) {
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
  console.log('eeeee')
  console.log("lo que recibo", req.body)
  try{
      console.log(req.body);
      const usuario = await UsuarioService.createUsuario(req.body);
      if(usuario===undefined){
          return res.status(404).json("datos repetidos")
      }else{
          return res.status(201).json(usuario);
      }
  } catch (error) {
      console.log(error)
      return res.status(500).json(error)
  }
});


 
 

  

  export default router;