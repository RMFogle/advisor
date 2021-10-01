import express from 'express'; 
import mongoose from 'mongoose';

import AgendaSchema from '../models/agenda.model.js';

const router = express.Router();


export const getAgendas = async (req, res) => {
    try {
        const getAgendas = await AgendaSchema.find(); 

        res.status(200).json(getAgendas); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

export const createAgenda = async (req, res) => {
    const post = req.body;

    const newAgenda = new AgendaSchema(post); 

    try {
        await newAgenda.save(); 

        res.status(201).json(newAgenda)
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

export const updateAgenda = async (req, res) => {
    const { id } = req.params; 
    const { title, message, notes, downloadURL, cardImage } = req.body;  

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Agenda with id: ${id}`); 

    const updatedAgenda = { title, message, notes, downloadURL, cardImage, _id: id }; 

    await AgendaSchema.findByIdAndUpdate(id, updatedAgenda, { new: true });

    res.json(updatedAgenda); 
}

export const deleteAgenda = async (req, res) => {
    const { id } = req.params; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    await AgendaSchema.findByIdAndRemove(id); 

    res.json({ message: "Agenda deleted successfully." }); 
}

export default router; 