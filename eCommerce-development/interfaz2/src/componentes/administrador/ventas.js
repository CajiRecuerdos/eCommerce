import React from "react";
import AdminNavbar from "./adminNavbar";

export default function Ventas() {
    return (
        <>
        <AdminNavbar></AdminNavbar>
            <table className="table container shadow w-50 mt-5">
                <thead>
                    <tr>
                        <th scope="col">Fechas</th>
                        <th scope="col">idVenta</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>fecha prueba</td>
                        <td>12121</td>
                        <td>$ 343</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}