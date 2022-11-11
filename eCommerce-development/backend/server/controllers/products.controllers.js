import Product from '../models/Product.js';

export const getProducts =  async (req, res) => {
    const products = await Product.find();
    res.send(products)
};

export const createProducts = async (req, res) => {
    const {name, description, price, image, stock} = req.body
    const newProduct = new Product({name, description, price, image, stock}) 
    await newProduct.save()
    return res.json(newProduct)
};
export const updateProducts = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
    console.log(product)
    return res.send('actualizacion de producto correcta')
}

export const deleteProducts = async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    if (!deleteProduct){
        return res.sendStatus(404)
    } else{
        return res.sendStatus(204)
    }
}

export const getProduct = (req, res) => res.send("Consultar un solo producto");