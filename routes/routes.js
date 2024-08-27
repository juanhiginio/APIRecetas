import express from "express";

import controladores from "../controllers/controllers.js";

const router = express.Router();

router.get("/api/recetas/", controladores.obtenerTodasLasRecetas);


export default router;