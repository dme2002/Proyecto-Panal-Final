"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const proyectos_controllers_1 = require("../controllers/proyectos.controllers");
const router = express_1.default.Router();
router.put("/id", proyectos_controllers_1.guardarProyecto);
//Obteniendo los proyecto
router.get("/", proyectos_controllers_1.obtenerProyectos);
//obteniendo un proyecto
router.get("/:id", proyectos_controllers_1.obtenerUnProyecto);
//obteniendo carpetas de un proyecto
router.get("/:id/carpetas", proyectos_controllers_1.obtenerCarpetasProyecto);
exports.default = router;
