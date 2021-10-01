import mongoose from 'mongoose'; 

const agendaSchema = mongoose.Schema({
    title: String, 
    message: String ,
    notes: String, 
    downloadURL: String,
    cardImage: String,
}, {
    timestamps: true, 
}); 

const AgendaSchema = mongoose.model('AgendaSchema', agendaSchema); 

export default AgendaSchema; 