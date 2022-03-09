import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";


// Este código es para conectar las devTool de redux a nuestra aplicación.
// Fue un copiar y pegar de la documentación que ofrece la devTool.
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Se utiliza el "combineReducers()" porque "createStore" puede recibir solo un reducer directamente,
// pero esta función nos permite agregar un objeto con varios reducers y así poder enviar más de uno.
const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(reducers, devTools);