import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { shopInitialState } from './reducers/carritoReducer';
import { shopReducer } from './reducers/carritoReducer';
import Home from './componentes/cliente/productosClientes/Home/index.jsx';
import {CartProvider} from './componentes/cliente/productosClientes/Context/CartContext.jsx';
import { Cajitas } from './componentes/administrador/cajitas';
import AgregarProducto from './componentes/administrador/agregarProducto';
import Ventas from './componentes/administrador/ventas';
//import {Tablas} from './componentes/administrador/Tablas';//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={shopInitialState} reducer={shopReducer}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="productos" element={<CartProvider>
      <Home /></CartProvider>} />

          {/* RUTAS ADMINISTRADOR*/}
      <Route path="cajitas" element={<Cajitas />} />
      <Route path="agregarproducto" element={<AgregarProducto />} />
      <Route path="ventas" element={<Ventas />} />

    
      </Routes>
    </BrowserRouter>
  </StateProvider>
);

