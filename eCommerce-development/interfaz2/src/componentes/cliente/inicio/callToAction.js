import React from "react";
import {Link} from "react-router-dom";

export default function CallToAction(){
    return(
        <div className="container text-center call">
            <div className="calltoaction-container">
                <Link type="button" class="btn btn-primary boton-call" to="/productos">Ir a la tienda</Link>
            </div>
        </div>
    );
}