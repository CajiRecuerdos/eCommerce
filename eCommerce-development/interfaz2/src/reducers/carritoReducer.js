// Debemos definir el estado inicial de nuestro ejercicio

import { TYPES } from '../actions/carritoActions';
import carrito from "../ProductosDB.json"

export const shopInitialState = {
    // lista de productos del backend
    products: carrito,
    // aqui vamos a guardar los productos que agreguemos
    newCart: [],
    
    total: 0,
}

// Creamos la logica, cuando llamemos a los types ¿Que va hacer tu codigo?
// las funciones reductoras reciben siempre un estado y las acciones a cumplir

export function shopReducer(state, action) {
    
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(
                (product) => product.id === action.payload);

            /// para que retorne con el indice de cantidad

            let iteminCart = state.newCart.find((item) => item.id === newItem.id)

            return iteminCart
                ? {
                    ...state,
                    newCart: state.newCart.map((item) =>
                        item.id === newItem.id
                            ? { ...item, cantidad: item.cantidad + 1 }
                            : item),
                }
                : {
                    ...state,
                    newCart: [...state.newCart, {...newItem, cantidad: 1}],
                }

        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.newCart.find((item) => item.id === action.payload);
            return itemToDelete.cantidad > 1?{
                ...state,
                newCart: state.newCart.map(item => item.id === action.payload
                    ?{...item, cantidad: item.cantidad - 1}:
                    item
                    ),
            }:{
                ...state,
                newCart: state.newCart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.CLEAR_CART: {
            return shopInitialState;
        }
        default:
            return state;
    }

}