import { addFilas, deleteFila, readFila, updateFila } from '../models/model.js';
import { fetchFilas } from '../services/atenderBem.service.js';
  

export const getFilas = async (req, res) => {

  const { url, key } = req.query;

  try {
    let response = await fetchFilas(url,key)

    if(!response || response.length == 0){return []}

    const formattedList = formatItems(response)
    
    let filasDB = await addFilas(req.db, formattedList) 

    let connected = []
    let disconnected = []

    for(let i = 0; i < filasDB.length; i++){
      if(filasDB[i].connected){
        connected.push(filasDB[i])
      }else {
        disconnected.push(filasDB[i])
      }
    }

    const data = {
      connected,
      disconnected,
      verificationDate: new Date().toISOString(),
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

};


export const conectFila = async (req, res) => {
  const { db } = req.db;
  const { id } = req.params; 
  
  try {

    const changes = {
      connected_date: new Date().toISOString(),
      connected:1
    }

    let updated = await updateFila(db, id, changes )

    if (updated) {
      let newItem = await readFila(db, id)
      res.status(200).json({ message: `Fila ${id} conectada com sucesso.`, item: newItem });
    } else {
      res.status(404).json({ message: `Fila ${id} não encontrada para conexão.` });
    }
  } catch (error) {
    console.error(`Erro ao conectar/atualizar fila ${id}:`, error);
    res.status(500).json({ error: 'Erro interno do servidor ao conectar/atualizar fila.' });
  }
};


export const deleteFilaFromDB = async (req, res) => {
  const { db } = req.db;
  const { id } = req.params;
  try { 
    const deleted = await deleteFila(db, id);
    if (deleted) {
      res.status(200).json({ message: `Fila ${id} deletada com sucesso.` });
    } else {
      res.status(404).json({ message: `Fila ${id} não encontrada para deletar.` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor ao deletar fila.' });
  }
};

const formatItems = (list) => {
  if (!Array.isArray(list)) {
    console.error("A entrada não é um array. Retornando array vazio.");
    return [];
  }

  return list.map(item => {
    return {
      id: item.id,
      connected: item.connected,
      chatsOnQueue: item.chatsOnQueue,
      name: item.name,
      type: item.type
    };
  });
}