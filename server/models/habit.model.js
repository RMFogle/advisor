import mongoose from 'mongoose'; 

const habitSchema = mongoose.Schema({
    title: String, 
    notes: String,
    timer: String,
    downloadURL: {
        type: String, 
        required: 'URL can\'t be empty', 
        unique: true 
    },
    createdAt: {
        type: Date, 
        default: new Date(), 
    },
}, {
    timestamps: true, 
}); 

habitSchema.path('downloadURL').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val); 
}, 'Invalid URL.'); 

const HabitSchema = mongoose.model('HabitSchema', habitSchema); 

export default HabitSchema; 