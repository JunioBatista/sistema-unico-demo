import { initDatabase } from '../config/dataBase.js';
import { CreateFilaDTO } from '../dtos/FilaRequest.model.js';
import { createFila, getAllFilas } from '../services/filas.service.js';

export const getFilas = async (req, res) => {
  const db = await initDatabase();
  const users = await getAllFilas(db);
  res.json(users);
};

export const addFila = async (req, res) => {
  try {
    const db = await initDatabase();
    const dto = new CreateFilaDTO(req.body);
    const user = await createFila(db, dto);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
