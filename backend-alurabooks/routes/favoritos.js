import { Router } from 'express'
import { deleteFavorito, getFavoritos } from '../middlewares/favoritos.js';

const router = Router();

router.get("/", getFavoritos);
router.delete("/:id", deleteFavorito);

export default router