import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk'
import { uiReducer } from "../reducers/uiReducer";



// Este código es para conectar las devTool de redux a nuestra aplicación.
// Fue un copiar y pegar de la documentación que ofrece la devTool.
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Este código también se utiliza para conectar las devTools de redux pero con la diferencia
// de que cambia el codigo porque ahora se está utilizando un middleware para trabajar con
// acciones asíncronas.
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Se utiliza el "combineReducers()" porque "createStore" puede recibir solo un reducer directamente,
// pero esta función nos permite agregar un objeto con varios reducers y así poder enviar más de uno.
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);