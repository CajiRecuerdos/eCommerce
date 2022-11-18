import { Router } from 'express';
import { getStock, getCart } from '../controllers/products.client.js';

const router = Router();

router.get('/stock', getStock);
router.get('/cart/:id', getCart);

export default router