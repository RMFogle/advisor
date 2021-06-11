import express from 'express'; 
import mongoose from 'mongoose'; 

import RoutineSchema from '../models/routine.model.js'; 

const router = express.Router(); 

export const getRoutines = async (req, res) => {
    try {
        const getRoutines = await RoutineSchema.find(); 

        res.status(200).json(getRoutines); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

export const createRoutine = async (req, res) => {
    const post = req.body;

    const newRoutine = new RoutineSchema(post); 

    try {
        await newRoutine.save(); 

        res.status(201).json(newRoutine)
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

export const updateRoutine = async (req, res) => {
    const { id } = req.params; 
    const { title } = req.body; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Routine with id: ${id}`); 

    const updatedRoutine = { title, _id: id }; 

    await RoutineSchema.findByIdAndUpdate(id, updatedRoutine, { new: true });

    res.json(updatedRoutine); 
}

export const deleteRoutine = async (req, res) => {
    const { id } = req.params; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Routine with id: ${id}`);
    
    await RoutineSchema.findByIdAndRemove(id); 

    res.json({ message: "Routine deleted successfully." }); 
}

export default router; 