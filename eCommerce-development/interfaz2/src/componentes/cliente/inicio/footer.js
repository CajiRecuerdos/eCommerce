import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-100 container mt-5 navbar-fixed-bottom">
            <div className="p-2 text-center text-light container-footer shadow">
                <div className="">
                    <Link to="/">
                        <img className="logo-img" src="https://cdn-icons-png.flaticon.com/512/639/639339.png"></img>
                    </Link>
                </div>
                <div ClassName="">
                    <h5 className="h5-footer">© copyright 2022</h5>
                </div>
                <div className="">
                    <img className="icon-redes" src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png"></img>
                    <img className="icon-redes" src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"></img>
                    <img className="icon-redes" src="https://cdn-icons-png.flaticon.com/512/733/733585.png"></img>
                </div>
            </div>
        </footer>
    );
}