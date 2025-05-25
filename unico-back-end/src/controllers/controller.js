import { initDatabase } from '../config/dataBase.js';
import { fetchFilas } from '../services/atenderBem.service.js';
import { createFila } from '../services/filas.service.js';
  


export const getFilas = async (req, res) => {

  const { url, key } = req.query;

  try {
    let response = await fetchFilas(url,key)
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

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
