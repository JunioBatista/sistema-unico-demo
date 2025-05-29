import express from 'express';
import { getFilas, conectFila, deleteFilaFromDB } from '../controllers/controller.js';

const router = express.Router();

router.get('/filas', getFilas);
router.put('/filas/desconectadas/:id', conectFila);
router.delete('/filas/desconectadas/:id', deleteFilaFromDB);


export default router;