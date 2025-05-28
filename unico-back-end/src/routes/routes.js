import express from 'express';
import { getFilas, conectFila } from '../controllers/controller.js';
import { deleteFila } from '../models/model.js';

const router = express.Router();

router.get('/filas', getFilas);
router.put('/filas/desconectadas/:id', conectFila);
router.delete('/filas/desconectadas/:id', deleteFila);


export default router;