import express from "express";
import { guardarProyecto, obtenerCarpetasProyecto, obtenerProyectos, obtenerUnProyecto } from "../controllers/proyectos.controllers";

const router = express.Router();

router.put("/id", guardarProyecto);
//Obteniendo los proyecto
router.get("/", obtenerProyectos);
//obteniendo un proyecto
router.get("/:id", obtenerUnProyecto);
//obteniendo carpetas de un proyecto
router.get("/:id/carpetas", obtenerCarpetasProyecto);



export default router;