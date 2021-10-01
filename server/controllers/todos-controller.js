import express from 'express';
import mongoose from 'mongoose';

import TodoSchema from '../models/todo.model.js';

const router = express.Router();

export const getTodos = async (req, res) => {
    try {
        const getTodos = await TodoSchema.find();

        res.status(200).json(getTodos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createTodo = async (req, res) => {
    const post = req.body;

    const newTodo = new TodoSchema(post);

    try {
        await newTodo.save();

        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body; 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Task with id: ${id}`);

    const updatedTodo = { task, completed, _id: id };
    
    await TodoSchema.findByIdAndUpdate(id, updatedTodo, {new: true });

    res.json(updatedTodo);
}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await TodoSchema.findByIdAndRemove(id);

    res.json({ message: "Task deleted successfully." });
}

export const checkTask = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const check = await TodoSchema.findById(id);
    const updatedTodo = await TodoSchema.findByIdAndUpdate(id, { completed: check.completed = !check.completed}, { new: true });

    res.json(updatedTodo);
}

export default router;