import { Router } from 'express';
import { createProducts, deleteProducts, getProducts, updateProducts } from '../controllers/products.controllers.js'

const router = Router();

router.get('/products', getProducts);
router.post('/products', createProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts);

router.get('/products/:id', getProducts);

export default router