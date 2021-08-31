import mongoose from 'mongoose'; 

const breakSchema = mongoose.Schema({
    title: String, 
    message: String ,
    notes: String, 
    downloadURL: String,
}, {
    timestamps: true, 
}); 

const BreakSchema = mongoose.model('BreakSchema', breakSchema); 

export default BreakSchema; 