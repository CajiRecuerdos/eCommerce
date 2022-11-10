import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <div className="col">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link" to="/cajitas">Stock</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/agregarproducto">Agregar</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/ventas">Ventas</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col">
                <Link to="/">
                        <img className="logo-img " src="https://cdn-icons-png.flaticon.com/512/639/639339.png"></img>
                    </Link>
                </div>
            </div>

        </nav>
    );
};