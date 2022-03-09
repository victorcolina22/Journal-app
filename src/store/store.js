import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";


// Este código es para conectar las devTool de redux a nuestra aplicación.
// Fue un copiar y pegar de la documentación que ofrece la devTool.
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(reducers, devTools);