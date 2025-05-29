import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import { initDatabase } from './config/dataBase.js';
import createFilaTable from './models/model.js';

const app = express();
const PORT = 8000;

let dbInstance;

async function startApp() {
  try {
    dbInstance = await initDatabase();
    await createFilaTable(dbInstance);

    app.use(cors({
      origin: 'http://localhost:5173',
    }));
    
    app.use((req, res, next) => {
      req.db = dbInstance;
      next();
    });

    app.use(express.json());
    app.use('/api', router);

    app.use((err, req, res, next) => {
        res.status(err.status || 500).json({
          error: true,
          message: err.message || 'Erro interno do servidor'
        });
    });

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error('Falha iniciar o servidor ou banco de dados:', error);
    process.exit(1);
  }
}

startApp();

process.on('SIGINT', async () => {
  if (dbInstance) {
    await dbInstance.close();
  }
  process.exit(0);
});

process.on('SIGUSR2', async () => {
  if (dbInstance) {
    await dbInstance.close();
  }
  process.kill(process.pid, 'SIGUSR2');
});