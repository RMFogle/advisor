import express from 'express'; 

import { getRoutines } from '../controllers/routines-controller';

const router = express.Router(); 

router.get('/', getRoutines); 

export default router; 