import express from 'express';
import config from './config/config.js';
import userRouter from './routes/user.router.js';
import orderRouter from './routes/order.router.js';
import businessRouter from './routes/business.router.js';
import mongoose from 'mongoose';

const app = express();

// config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
mongoose.connect(config.MONGO_URL)
    .then(() => console.log('Database connected'))
    .catch((error) => {
        console.log(error);
        process.exit();
    });

// routers
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/business', businessRouter);

app.use(express.json());

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

