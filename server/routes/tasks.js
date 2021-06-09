import express from 'express';

import getTasks from '../controllers/tasks-controller.js'; 

const router = express.Router(); 

router.get('/', getTasks); 

export default router; 