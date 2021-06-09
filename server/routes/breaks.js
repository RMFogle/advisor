import express from 'express';

import { getBreaks } from '../controllers/breaks-controller.js'; 

const router = express.Router(); 

router.get('/', getBreaks); 

export default router; 