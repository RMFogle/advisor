import express from 'express'; 
import mongoose from 'mongoose'; 

import HabitSchema from '../models/habit.model.js'; 

const router = express.Router(); 

export const getHabits = async (req, res) => {
    try {
        const getHabits = await HabitSchema.find(); 

        res.status(200).json(getHabits); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

export const createHabit = async (req, res) => {
    const post = req.body;

    const newHabit = new HabitSchema(post); 

    try {
        await newHabit.save(); 

        res.status(201).json(newHabit)
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

export const updateHabit = async (req, res) => {
    const { id } = req.params; 
    const { title, notes, timer, downloadURL } = req.body; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Habit with id: ${id}`); 

    const updatedHabit = { title, notes, timer, downloadURL, _id: id }; 

    await HabitSchema.findByIdAndUpdate(id, updatedHabit, { new: true });

    res.json(updatedHabit); 
}

export const deleteHabit = async (req, res) => {
    const { id } = req.params; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    await HabitSchema.findByIdAndRemove(id); 

    res.json({ message: "Habit deleted successfully." }); 
}

export default router; 