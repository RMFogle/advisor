import mongoose from 'mongoose'; 

const taskSchema = mongoose.Schema({
    title: String, 
    checklist: String, 
    notes: String, 
    timer: String,
    createdAt: {
        type: Date, 
        default: new Date(), 
    },
}, {
    timestamps: true, 
});

const TaskSchema = mongoose.model('TaskSchema', taskSchema); 

export default TaskSchema; 