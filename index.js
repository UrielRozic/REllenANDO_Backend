import express from "express";
import cors from "cors";
import passport from "passport";
//import { jwtStrategy } from "./src/common/jwt.js"
import contenidosRouter from "./src/controllers/contenidosController.js";
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
//const specs = swaggerJsDoc(options);

//passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/contenidos", contenidosRouter);
//app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});