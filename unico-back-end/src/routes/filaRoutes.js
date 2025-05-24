import express from 'express';
import { getFilas, addFila } from '../controllers/FilaController.js';

const router = express.Router();

router.get('/', getFilas);
router.post('/', addFila);

export default router;