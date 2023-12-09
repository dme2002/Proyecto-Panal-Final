import express from "express";
import { guardarProyectoUsuario, guardarUsuario, loginUsuario, obtenerProyectosUsuario, obtenerUsuario, obtenerUsuarios, registrarUsuario } from "../controllers/usuarios.controllers";

const router = express.Router();

router.put("/id", guardarUsuario);
//Haciendo la ruta para obtener los usuarios
router.get("/", obtenerUsuarios);
//obteniendo un usuario
router.get("/:id", obtenerUsuario);
//guardando proyecto en un usuario
router.put("/:id/proyectos", guardarProyectoUsuario);

router.post("/", registrarUsuario);
router.post("/login", loginUsuario);
//obteniendo los proyectos de un usuario
router.get("/:id/proyectos", obtenerProyectosUsuario);

export default router;






