import BreakSchema from '../models/break.model.js'; 

export const getBreaks = async (req, res) => {
    try {
        const getBreaks = await BreakSchema.find(); 

        console.log(getBreaks); 

        res.status(200).json(getBreaks); 
    } catch (error) {
        res.status(400).json({ message: error.message }); 
    }
}

