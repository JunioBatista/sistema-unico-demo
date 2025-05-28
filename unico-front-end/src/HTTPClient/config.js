import axios from 'axios'

const HTTPClient = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export async function getListOfFilas({url, key}) {
    const response = await HTTPClient.get(`filas?url=${url}&key=${key}`);
    return response.data;
}

export async function updateFilaById(id) {
    const response = await HTTPClient.put(`filas/desconectadas/${id}`);
    return response.data;
}

export async function deleteFilaById(id) {
    const response = await HTTPClient.delete(`filas/desconectadas/${id}`);
    return response.data;
}