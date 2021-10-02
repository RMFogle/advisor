import express from 'express'; 
import mongoose from 'mongoose'; 
import cors from 'cors';
import dotenv from 'dotenv';

import agendaRoutes from './server/routes/agenda.js'; 
import todoRoutes from './server/routes/todos.js';


const app = express();
dotenv.config(); 

app.use(express.json({ limit: "30mb", extended: true })); 
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors()); 

app.use('/agendas', agendaRoutes); 
app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Advisor API')
});

const port = process.env.PORT || 5000; 

//Connect to mongodb cloud atlas 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri
); 
const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB database connection established successfully"); 
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); 
});