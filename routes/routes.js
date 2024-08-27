import express from "express";

import controladores from "../controllers/controllers.js";

const router = express.Router();

router.get("/api/recetas/", controladores.obtenerTodasLasRecetas);
router.post("/api/recetas", controladores.crearReceta);
router.patch("/api/recetas/:id", controladores.editarReceta);
router.delete("/api/recetas/:id", controladores.eliminarReceta);
router.get("/api/recetas/:id", controladores.buscarReceta);


export default router;