import express from "express";
import cors from "cors";
import contenidosRouter from "./src/controllers/contenidosController.js";
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());




app.use("/contenidos", contenidosRouter);



const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
    },

    servers: [
      {
        url: "http://localhost:5000",
        description: "My API Documentation",
      },
    ],
  },
  apis: ["./src/controllers/*.js"],
};
/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - userId
 *         - title
 *         - body
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         userId:
 *           type: integer
 *           description: id of author
 *         title:
 *           type: string
 *           description: title of post
 *         body:
 *           type: string
 *           descripton: content of post *
 *       example:
 *         id: 1
 *         userId: 1
 *         title: my title
 *         body: my article
 *
 */

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

http.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});