import express from 'express';

import { getAgendas, createAgenda, updateAgenda, deleteAgenda } from '../controllers/agenda-controller.js'; 

const router = express.Router(); 

router.get('/', getAgendas);
router.post('/', createAgenda); 
router.patch('/:id', updateAgenda); 
router.delete('/:id', deleteAgenda);

export default router; 