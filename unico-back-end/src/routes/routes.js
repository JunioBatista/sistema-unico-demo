import express from 'express';
import { getFilas, addFila } from '../controllers/controller.js';

const router = express.Router();

router.get('/filas', getFilas);
router.post('/', addFila);

export default router;