import express from 'express';
import productsRoutes from './routes/products.routes.js';


const app = express();

//Middlewares
app.use(express.json())

//Routes
app.use(productsRoutes)


export default app;
