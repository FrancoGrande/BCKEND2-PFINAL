import express from 'express';
import config from './config/config.js';
import userRouter from './routes/user.router.js';
import orderRouter from './routes/order.router.js';
import businessRouter from './routes/business.router.js';
import mongoose from 'mongoose';
import connectDB from './config/db.config.js'; 

const app = express();

// config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const connection = connectDB(config.MONGO_URL);

// routers
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/business', businessRouter);

app.use(express.json());

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

