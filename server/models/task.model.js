import mongoose from 'mongoose'; 

const taskSchema = mongoose.Schema({
    title: String, 
    checklist: String, 
    notes: String, 
    timer: String,
}, {
    timestamps: true, 
});

const TaskSchema = mongoose.model('TaskSchema', taskSchema); 

export default TaskSchema; 