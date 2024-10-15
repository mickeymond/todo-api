import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';

// Connect to database
await mongoose.connect(process.env.MONGO_URI);

// Create an express app
const app = express();

// Use middlewares
app.use(express.json());
app.use(cors());

// Use routes
app.use(todoRouter);
app.use(userRouter);

// Listen for incoming requests
app.listen(3000, () => {
    console.log('App is listening on port 3000');
});