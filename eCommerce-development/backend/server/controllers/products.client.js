import Product from '../models/Product.js';
import fs from 'fs-extra';

export const getStock = async (req, res) => {
    try {
        //throw new Error('mi propio error');
        const products = await Product.find();
        let exist = products.filter(products => products.stock > 0);
        res.send(exist)
        console.log(exist)
    } catch (error) {
        return res.status(500).json('Error:' + error.message)
    }
};


export const getCart = async (req, res) => {
    try {
        let cart = [];
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.sendStatus(404)
        } else {                          //Si el producto tiene stock agreguelo al carrito
            if (product.stock > 0) {
                cart = cart.push(product)
                //console.log(cart.length)
                return res.json(cart)
            }
            else {
                return res.send('Not in stock')
            }
        }
    }
    catch (error) {
        return res.status(500).json('Error:' + error.message)
    }
};