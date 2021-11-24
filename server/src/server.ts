import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db';

import { movieRoutes, actorRoutes, userRoutes } from './routes';
import { notFound, errorHandler } from './middleware';

dotenv.config();

connectDB();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'))

app.use('/api/users', userRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/movies', movieRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});