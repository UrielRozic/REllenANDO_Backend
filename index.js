import express from "express";
import cors from "cors";
import contenidosRouter from "./src/controllers/contenidosController.js";
import usuarioRouter from "./src/controllers/usuarioController.js";
import { jwtStrategy } from "./src/common/jwt.js"
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import TokenRouter from "./src/controllers/tokenController.js";
import passport from "passport";
import process from 'process';
import fs from 'fs'
import timeout from 'connect-timeout'



const app = express();



app.use(cors());
app.use(express.json());


passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/contenidos", contenidosRouter);
app.use("/usuario", usuarioRouter);
app.use("/auth", TokenRouter);
app.use(timeout('5s'))



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

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running at the port ${port}`)
});



process.on('uncaughtException', (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}`
  );
});

setTimeout(() => {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');

app.get('/app/:id', checkUserAuth, findApp, renderView, sendJSON);

function checkUserAuth(req, res, next) {
  if (req.session.user) return next();
  return next(new NotAuthorizedError());
}

