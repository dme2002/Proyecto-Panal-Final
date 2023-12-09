import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
//const usuarios = require('./src/models/usuarios.models');
import routerUsuarios from "./src/routers/usuarios.routers";
import routerPlanes from "./src/routers/planes.routers";
import routerProyectos from "./src/routers/proyectos.routers";
import routerCarpetas from "./src/routers/carpetas.routers";

import cors from "cors";

import { Console } from "console";
import mongoose from "mongoose";
import { Database } from "./util/database";


dotenv.config();
const db: Database = new Database(); // SE conecta
const app = express();
const port = process.env.PORT || 4000; // Si no se proporciona un puerto en el archivo .env, usa el puerto 3000 por defecto

app.use(cors()); // Permitir solicitudes de dominios diferentes

app.use(express.json()); // Poblar el objeto body

app.use("/usuarios", routerUsuarios);
app.use("/planes", routerPlanes);
app.use("/proyectos", routerProyectos);
app.use("/carpetas", routerCarpetas);

// Ruta de bienvenida
app.get("/", (req: Request, res: Response) => {
  res.send("Backend Proyecto Panal");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
