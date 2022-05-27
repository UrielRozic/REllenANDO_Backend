import express from "express";
import cors from "cors";
import passport from "passport";
import express from "express";
import { jwtStrategy } from "./src/common/jwt.js"
import contenidosRouter from "./src/controllers/contenidosController.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/contenidos", contenidosRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});