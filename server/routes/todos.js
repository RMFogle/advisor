import express from 'express';

import { getTodos, createTodo, updateTodo, deleteTodo, checkTask } from '../controllers/todos-controller.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id/checkTask', checkTask);

export default router;