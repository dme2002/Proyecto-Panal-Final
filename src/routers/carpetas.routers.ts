import express from "express";

import { guardarCarpetas, obtenerCarpetas, obtenerUnaCarpeta } from "../controllers/carpetas.controller";

const router = express.Router();

//Haciendo la ruta para obtener las carpetas
router.get("/", obtenerCarpetas);
//trayendo una carpeta
router.get("/:id", obtenerUnaCarpeta);

router.put("/", guardarCarpetas);

export default router;




