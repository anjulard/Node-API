import express from "express";
import bodyParser from 'body-parser';  // incoming post request bodies

import userRoutes from './routes/users.js';

// initialize express app
const app = express();
// specify the port for backend
const PORT = 4000;

// sending and requsting data from json format
app.use(bodyParser.json());

// running userRoutes when url starts to '/users'. 
app.use('/users', userRoutes);

// Create routes
   //First parameter is the path that we are expecting that request to. '/' means get request to the home page
   // Second para is the callback function
app.get('/', (req, res) => {
    // to check if this get method is running
    console.log('[TEST]!');

    // response to home page
    res.send('Hello from Home');
});

// listen for incoming requests
app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));

// nodemon use to keep track on chnages once we saved them

