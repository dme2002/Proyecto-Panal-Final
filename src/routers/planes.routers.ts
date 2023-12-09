import express from "express";
import { guardarPlanes, obtenerPlanes, obtenerUnPlan } from "../controllers/planes.controllers";

const router = express.Router();

router.put("/:id", guardarPlanes);
//trayendo los planes
router.get("/", obtenerPlanes);
//obteniendo un plan
router.get("/:id", obtenerUnPlan);






export default router;