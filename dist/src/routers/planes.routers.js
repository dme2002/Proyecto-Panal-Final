"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const planes_controllers_1 = require("../controllers/planes.controllers");
const router = express_1.default.Router();
router.put("/:id", planes_controllers_1.guardarPlanes);
//trayendo los planes
router.get("/", planes_controllers_1.obtenerPlanes);
//obteniendo un plan
router.get("/:id", planes_controllers_1.obtenerUnPlan);
exports.default = router;
