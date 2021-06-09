import mongoose from 'mongoose'; 

const routineSchema = mongoose.Schema({
    title: String,
}, {
    timestamps: true, 
}); 

const RoutineSchema = mongoose.model('RoutineSchema', routineSchema); 

export default RoutineSchema; 