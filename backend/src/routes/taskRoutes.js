import { createTask, getTasks, updateTask, deleteTask } from '../controllers/taskController.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';
import express from 'express';
const router = express.Router();

// Task routes
router.post('/tasks', isAuthenticated, createTask);
router.get('/tasks', isAuthenticated, getTasks);
router.put('/tasks/:id', isAuthenticated, updateTask);
router.delete('/tasks/:id', isAuthenticated, deleteTask);

export default router;

