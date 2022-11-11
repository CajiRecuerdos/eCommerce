import Product from '../models/Product.js';

export const getProducts =  async (req, res) => {
    const products = await Product.find();
    res.send(products)
};

export const createProducts = (req, res) => {
    console.log(req.body)
    return res.send('Product created')
};
export const updateProducts = (req, res) => res.send("Actualizando un producto");

export const deleteProducts = (req, res) => res.send("Eliminar un producto");

export const getProduct = (req, res) => res.send("Consultar un solo producto");