// const express = require('expr
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import app from './app.js';


// Load environment variables
dotenv.config();
connectDB();




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));