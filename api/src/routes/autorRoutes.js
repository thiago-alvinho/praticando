import express from 'express';
import AutorController from '../controllers/autorController.js';

const router = express.Router();


router.get("/autores", AutorController.listarAutores);
router.get("/autores/:id", AutorController.encontrarAutorById);
router.post("/autores", AutorController.cadastrarAutor);
router.put("/autores/:id", AutorController.editarAutor);
router.delete("/autores/:id", AutorController.deletarAutor);

export default router;
