import { Router } from 'express';
import { contenidosService } from '../services/contenidosService.js';
import { Authenticate } from '../common/jwt.js';

const router = Router();
const contenidosService = new contenidosService();

  router.get('/juegos', Authenticate, async (req, res) => {
    console.log(`This is a get operation`);
    
    const juego = await juegoService.getJuego();
  
    return res.status(200).json(juego);
  });
  

  export default router;