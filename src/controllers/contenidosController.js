import { Router } from 'express';
import { Authenticate } from '../common/jwt.js';
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
 

  router.get('/juegos', Authenticate, async (req, res) => {
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
  router.get('/juegos/:id', Authenticate, async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const juego = await ContenidosService.getJuegoById(req.params.id);
  
    return res.status(200).json(juego);
  });

  router.get('/', Authenticate, async (req, res) => {
  
    return res.send("holaaaaaaaaaaaaaaa");
  });

  router.get('/contenidos/:contenido', Authenticate, async (req, res) => {
    console.log(`Request URL Param: ${req.params.contenido}`);
    console.log(`This is a get operation`);
  
    const contenido = await ContenidosService.getContenido(req.params.contenido);
  
    return res.status(200).json(contenido);
  });


  router.get('/contenidos/:contenido/:id', Authenticate, async (req, res) => {
    console.log(`Request URL Param: ${req.params.contenido, req.params.id}`);
    console.log(`This is a get operation`);
  
    const contenido = await ContenidosService.getContenidoById(req.params.contenido, req.params.id);
  
    return res.status(200).json(contenido);
  });


  router.get('/preguntas', Authenticate, async (req, res) => {
    console.log(`This is a get operation`);
    
    const pregunta = await ContenidosService.getPregunta();
  
    return res.status(200).json(pregunta);
  });

  router.get('/preguntas/:id', Authenticate, async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log(`This is a get operation`);
  
    const pregunta = await ContenidosService.getPreguntaById(req.params.id);
  
    return res.status(200).json(pregunta);
  });
  

  export default router;