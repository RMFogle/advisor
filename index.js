import express from 'express'; 
import mongoose from 'mongoose'; 
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import agendaRoutes from './server/routes/agenda.js'; 
import todoRoutes from './server/routes/todos.js';

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000; 

app.use(express.json({ limit: "30mb", extended: true })); 
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors()); 

app.use('/agendas', agendaRoutes); 
app.use('/todos', todoRoutes);

//Connect to mongodb cloud atlas 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri
); 
const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB database connection established successfully"); 
})

if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); 
});