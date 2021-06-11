import express from 'express'; 
import mongoose from 'mongoose'; 

import TaskSchema from '../models/task.model.js'; 

export const getTasks = async (req, res) => {
    try {
        const getTasks = await TaskSchema.find(); 

        res.status(200).json(getTasks); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

export const createTask = async (req, res) => {
    const post = req.body; 

    const newTask = new TaskSchema(post); 

    try {
        await newTask.save(); 

        res.status(201).json(newTask)
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params; 
    const { title, checklist, notes, timer } = req.body; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Task with id: ${id}`); 

    const updatedTask = { title, checklist, notes, timer, _id: id }; 

    await TaskSchema.findByIdAndUpdate(id, updatedTask, { new: true });

    res.json(updatedTask); 
}

export const deleteTask = async (req, res) => {
    const { id } = req.params; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Task with id: ${id}`);
    
    await TaskSchema.findByIdAndRemove(id); 

    res.json({ message: "Task deleted successfully." }); 
}

export default router; 