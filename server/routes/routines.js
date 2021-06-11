import express from 'express'; 

import { createRoutine, deleteRoutine, getRoutines, updateRoutine } from '../controllers/routines-controller.js';

const router = express.Router(); 

router.get('/', getRoutines);
router.post('/', createRoutine); 
router.patch('/:id', updateRoutine); 
router.delete('/:id', deleteRoutine); 

export default router; 