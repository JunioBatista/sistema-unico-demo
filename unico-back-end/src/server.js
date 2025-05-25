import app from './app.js';

const HOST = 'localhost';
const PORT = 8000;

const server = app.listen(process.env.PORT || PORT, () => {
  if (server) {
    console.log(`Servidor rodando em ${HOST}:${PORT}`);
  } else {
    console.error(`Falha ao iniciar servidor.`);
  }
});