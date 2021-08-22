import mongoose from 'mongoose'; 

const breakSchema = mongoose.Schema({
    title: { type: String }, 
    message: { type: String },
    notes: { type: String }, 
    checklist: { type: String },
    downloadURL: {
        type: String, 
        unique: true 
    },
    timer: { type: String },
}, {
    timestamps: true, 
}); 

const BreakSchema = mongoose.model('BreakSchema', breakSchema); 

export default BreakSchema; 