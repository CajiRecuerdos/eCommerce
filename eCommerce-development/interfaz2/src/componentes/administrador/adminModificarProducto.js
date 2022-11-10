import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdminNavbar from "./adminNavbar";

export default function ModificarProducto() {
    return (
        <>
            <AdminNavbar></AdminNavbar>
            <div className="container card shadow mt-5 w-50 p-4">

                <h2 className="mb-4 text-center">Modificar un producto</h2>

                <Form>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa la descripcion" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="text" placeholder="Precio" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="text" placeholder="Stock" />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Modificar
                    </Button>
                </Form>
            </div>

        </>
    );
}