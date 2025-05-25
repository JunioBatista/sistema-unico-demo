import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import morgan from 'morgan';
import { initDatabase } from './config/dataBase.js';

const app = express();

app.use(morgan('dev'));

app.use(cors({
  origin: 'http://localhost:5173',
}));

initDatabase();

app.use(express.json());
app.use('/', router);

app.use((err, req, res, next) => {
    console.error('Erro capturado:', err);
    res.status(err.status || 500).json({
      error: true,
      message: err.message || 'Erro interno do servidor'
    });
  });

export default app;