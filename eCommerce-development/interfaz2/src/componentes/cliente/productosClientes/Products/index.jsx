import React, { useContext } from "react";
import { ProductsData } from "../../Data/ProductsData";
import { CartContext } from "../Context/CartContext";

import styles from './styles.module.scss'

const Products =() => {
    const{addItemToCart} = useContext(CartContext)

    return (
        <div className={styles.productsContainer}>
            {ProductsData.map((product, i) => (
                <div key={i} className={styles.product}>
                    <img src={product.img} alt={product.name} />
                    <div>
                        <p>
                          <div>{product.name}</div>
                          <div>{product.description}</div>
                          <div>${product.price}</div>

                        </p>
                    </div>
                    <button onClick={()=> addItemToCart(product)}>Añadir al carrito</button>
                </div>
            ))}
        </div>
    )
}

export default Products