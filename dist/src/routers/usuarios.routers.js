"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controllers_1 = require("../controllers/usuarios.controllers");
const router = express_1.default.Router();
router.put("/id", usuarios_controllers_1.guardarUsuario);
//Haciendo la ruta para obtener los usuarios
router.get("/", usuarios_controllers_1.obtenerUsuarios);
//obteniendo un usuario
router.get("/:id", usuarios_controllers_1.obtenerUsuario);
//guardando proyecto en un usuario
router.put("/:id/proyectos", usuarios_controllers_1.guardarProyectoUsuario);
router.post("/", usuarios_controllers_1.registrarUsuario);
router.post("/login", usuarios_controllers_1.loginUsuario);
//obteniendo los proyectos de un usuario
router.get("/:id/proyectos", usuarios_controllers_1.obtenerProyectosUsuario);
exports.default = router;
