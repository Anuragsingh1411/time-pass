import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);


export default app;
