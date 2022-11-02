import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import { shopReducer } from "../../../reducers/carritoReducer.js";
import { shopInitialState } from "../../../reducers/carritoReducer.js";
// import {carritoReducer} from "../../reducers/carritoReducer.js";
import style from "../../../style/inicio.css";



export default function Navbar() {

    // traemos el item del carrito para mostrarlo siempre en el navbar 

    const [state, dispatch] = useStateValue(
        shopReducer,
        shopInitialState
    )

    const { products, newCart } = state;


    // funcion para que el navbar siempre tenga la cantidad de productos en el carrito
    function cantidad() {
        let cant = 0;
        for (let i in newCart) {
            cant = cant + newCart[i].cantidad
        }
        return cant;
    }


    return (
        <div className="container text-center navbar-container shadow">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/productos">Tienda</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/carrito">Carrito</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Habla con nosotros
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">WhatsApp</a></li>
                                            <li><a className="dropdown-item" href="#">Facebook</a></li>
                                            <li><a className="dropdown-item" href="#">YouTube</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col">
                    <Link to="/">
                        <img className="logo-img" src="https://cdn-icons-png.flaticon.com/512/639/639339.png"></img>
                    </Link>
                </div>
                <div className="col">
                    <Link to="cajitas">
                        <img className="login-img" src="https://cdn-icons-png.flaticon.com/512/5645/5645106.png"></img>
                    </Link>
                </div>



            </div>
        </div>



    );
}