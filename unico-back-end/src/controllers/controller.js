import { initDatabase } from '../config/dataBase.js';
import { fetchFilas } from '../services/atenderBem.service.js';
import { createFila } from '../services/filas.service.js';
  


export const getFilas = async (req, res) => {

  const { url, key } = req.query;

  try {
    let response = await fetchFilas(url,key)

    if(!response){return []}

    let connected = []
    let disconnected = []

    for(let i = 0; i < response.length; i++){
      if(response[i].connected){
        connected.push(response[i])
      }else {
        disconnected.push(response[i])
      }
    }

    const data = {
      connected,
      disconnected,
      total: response.length
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

};

export const addFila = async (req, res) => {
  try {
    const db = await initDatabase();
    const user = await createFila(db, dto);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
