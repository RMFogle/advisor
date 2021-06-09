import mongoose from 'mongoose'; 

const breakSchema = mongoose.Schema({
    title: String, 
    message: String, 
    timer: String, 
    createdAt: {
        type: Date, 
        default: new Date(), 
    },
}, {
    timestamps: true, 
}); 

const BreakSchema = mongoose.model('BreakSchema', breakSchema); 

export default BreakSchema; 