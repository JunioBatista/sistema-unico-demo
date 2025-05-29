import axios from 'axios';

export const fetchFilas = async (url, key) => {
  try {
    let response = await axios.post(`${url}int/getAllQueues`, 
      {
        apiKey: key
      }, 
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        } 
      });
    return response.data;

  } catch (error) {
    console.error('Erro ao buscar dados da API externa:', error.message);
    throw new Error('Falha na comunicação com API externa');
  }
};