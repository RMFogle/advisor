import mongoose from 'mongoose'; 

const breakSchema = mongoose.Schema({
    title: { type: String }, 
    message: { type: String }, 
    timer: { type: String },
}, {
    timestamps: true, 
}); 

const BreakSchema = mongoose.model('BreakSchema', breakSchema); 

export default BreakSchema; 