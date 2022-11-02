import {createContext, useContext, useReducer} from "react";

export const StateContext = createContext(); // crear como el encierro de la api, desde aqui se rodeara a los otros archivos por decirlo asi


// el StateProvider permite va a proveer la herramienta para pasar los datos
// de un lado a otro. Osea de un archivo a otro.

export const StateProvider =({reducer, initialState, children})=>(
    <StateContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// UseStateValue nos permite consumir desde cualquier componente los cambios 
// de estado que tenga la api

// se debe usar siempre cuando llamas a los datos

export const useStateValue = () => useContext(StateContext);