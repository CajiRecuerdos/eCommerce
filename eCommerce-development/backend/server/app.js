import express from 'express';
import productsRoutes from './routes/products.routes.js';
import fileUpload from 'express-fileupload';

const app = express();

//Middlewares
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './files'
}))

//Routes
app.use(productsRoutes)


export default app;
