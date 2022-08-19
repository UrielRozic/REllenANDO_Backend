import { Router } from 'express';
import { contenidosService } from '../services/contenidosService.js';

const router = Router();
const ContenidosService = new contenidosService();


 

/**
 * @swagger
 *  tags:
 *    name: Contenidos
 *    description: endpoint contenidos
 */

/**
 * @swagger
 * /contenidos/juegos:
 *   get:
 *     summary: Trae todos los juegos
 *     tags: [Contenidos]
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
 *     tags: [Contenidos]
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

  router.get('/', async (req, res) => {
  
    return res.send("holaaaaaaaaaaaaaaa");
  });

  router.get('/contenido/:contenido', async (req, res) => {
    console.log(`Request URL Param: ${req.params.contenido}`);
    console.log(`This is a get operation`);
  
    const contenido = await ContenidosService.getContenido(req.params.contenido);
  
    return res.status(200).json(contenido);
  });


  router.get('/contenidos/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.contenido, req.params.id}`);
    console.log(`This is a get operation`);
  
    const contenido = await ContenidosService.getContenidoById(req.params.id);
  
    return res.status(200).json(contenido);
  });


  router.get('/preguntas', async (req, res) => {
    console.log(`This is a get operation`);
    
    const pregunta = await ContenidosService.getPregunta();
  
    return res.status(200).json(pregunta);
  });

  router.get('/preguntas/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const pregunta = await ContenidosService.getPreguntaById(req.params.id);
  
    return res.status(200).json(pregunta);
  });
  router.post('/agregar', async (req, res) => {
    console.log(`This is a post operation`);
    
    const agregar = await ContenidosService.createContenido(req.body);
  
    return res.status(200).json(agregar);
  });

  export default router;