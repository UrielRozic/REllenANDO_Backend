import { Router } from 'express';
import { contenidosService } from '../services/contenidosService.js';

const router = Router();
const ContenidosService = new contenidosService();

  router.get('/juegos', async (req, res) => {
    console.log(`This is a get operation`);
    
    const juego = await ContenidosService.getJuego();
  
    return res.status(200).json(juego);
  });
  router.get('/juegos/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const juego = await ContenidosService.getJuegoById(req.params.id);
  
    return res.status(200).json(juego);
  });
  router.get('/DetallesJuegos', async (req, res) => {
    console.log(`This is a get operation`);
    
    const juego = await ContenidosService.getDetalleJuego();
  
    return res.status(200).json(juego);
  });

  export default router;