import express from 'express';

import getHabits from '../controllers/habits-controller.js'; 

const router = express.Router(); 

router.get('/', getHabits); 

export default router; 