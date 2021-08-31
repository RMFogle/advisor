import express from 'express'; 
import mongoose from 'mongoose'; 

import BreakSchema from '../models/break.model.js';

const router = express.Router(); 

export const getBreaks = async (req, res) => {
    try {
        const getBreaks = await BreakSchema.find(); 

        res.status(200).json(getBreaks); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

export const createBreak = async (req, res) => {
    const post = req.body;

    const newBreak = new BreakSchema(post); 

    try {
        await newBreak.save(); 

        res.status(201).json(newBreak)
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

export const updateBreak = async (req, res) => {
    const { id } = req.params; 
    const { title, message, notes, downloadURL } = req.body;  

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Break with id: ${id}`); 

    const updatedBreak = { title, message, notes, downloadURL, _id: id }; 

    await BreakSchema.findByIdAndUpdate(id, updatedBreak, { new: true });

    res.json(updatedBreak); 
}

export const deleteBreak = async (req, res) => {
    const { id } = req.params; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    await BreakSchema.findByIdAndRemove(id); 

    res.json({ message: "Break deleted successfully." }); 
}

export default router; 