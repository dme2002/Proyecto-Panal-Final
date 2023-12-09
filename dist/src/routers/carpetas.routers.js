"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carpetas_controller_1 = require("../controllers/carpetas.controller");
const router = express_1.default.Router();
//Haciendo la ruta para obtener las carpetas
router.get("/", carpetas_controller_1.obtenerCarpetas);
//trayendo una carpeta
router.get("/:id", carpetas_controller_1.obtenerUnaCarpeta);
router.put("/", carpetas_controller_1.guardarCarpetas);
exports.default = router;
