import express from 'express';

import { getBreaks, createBreak, updateBreak, deleteBreak } from '../controllers/breaks-controller.js'; 

const router = express.Router(); 

router.get('/', getBreaks);
router.post('/', createBreak); 
router.patch('/:id', updateBreak); 
router.delete('/:id', deleteBreak);

export default router; 