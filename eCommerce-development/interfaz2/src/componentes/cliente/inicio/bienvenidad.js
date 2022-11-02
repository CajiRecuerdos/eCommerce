import React from "react";
import { Link } from "react-router-dom";
import style from "../../../style/inicio.css"

export default function Bienvenida() {
    return (
        <div className="container text-center bg-light bienvenida">
            <div className="bienvenida-container">
                <h1>Encuentra la caja ideal aqui</h1>
                <Link type="button" class="btn btn-primary" to="/productos">Tienda</Link>
            </div>

        </div>
    );
}