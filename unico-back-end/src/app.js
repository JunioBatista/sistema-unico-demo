import express from 'express';
import './config/dotenv.js';
import router from './routes/filaRoutes.js';

const app = express();

app.use(express.json());
app.use('/fila', router);

export default app;