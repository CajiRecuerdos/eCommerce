import React from "react";
import Cart from "../Cart";
import Products from "../Products";

import styles from './styles.module.scss'


const Home =() => {
    return(
        <div className={styles.Home}>
            <h1 className={styles.Title}>Cajita de Recuerdos</h1>
            <Cart />
            <Products />
        </div>
    )
}

export default Home