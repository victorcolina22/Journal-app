import { types } from '../types/types';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Manuel'));
        }, 3500);
    }
}

export const login = (uid, displayName) => ({
    // Si solo se retorna un objeto se puede escribir encerrandolo entre paréntesis 
    // y es lo mismo que escribir "return {}".
    type: types.login,
    payload: {
        uid,
        displayName
    }
});