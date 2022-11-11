import Product from '../models/Product.js';
export const getProducts = (req, res) => {
    const products = Product.find();
    res.send(products);
}

export const createProducts = (req, res) => res.send("Nuevo producto creado");

export const updateProducts = (req, res) => res.send("Actualizando un producto");

export const deleteProducts = (req, res) => res.send("Eliminar un producto");

export const getProduct = (req, res) => res.send("Consultar un solo producto");