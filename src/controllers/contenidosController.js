import { Router } from 'express';
import { contenidosService } from '../services/contenidosService.js';

const router = Router();
const ContenidosService = new contenidosService();


 

/**
 * @swagger
 *  tags:
 *    name: get
 *    description: gets
 */

/**
 * @swagger
 * /contenidos/juegos:
 *   get:
 *     summary: Trae todos los juegos
 *     tags: [Gets]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *           
 */
 

  router.get('/juegos', async (req, res) => {
    console.log(`This is a get operation`);
    
    const juego = await ContenidosService.getJuego();
  
    return res.status(200).json(juego);
  });

  /**
 * @swagger
 * /contenidos/juegos/:id:
 *   get:
 *     summary: Trae los juegos segun el id
 *     tags: [Gets]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *           
 */
  router.get('/juegos/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const juego = await ContenidosService.getJuegoById(req.params.id);
  
    return res.status(200).json(juego);
  });

  /**
 * @swagger
 * /contenidos/DetallesJuegos:
 *   get:
 *     summary: Trae la descripcion de los juegos
 *     tags: [Gets]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *           
 */
  router.get('/DetallesJuegos', async (req, res) => {
    console.log(`This is a get operation`);
    
    const juego = await ContenidosService.getDetalleJuego();
  
    return res.status(200).json(juego);
  });

  export default router;