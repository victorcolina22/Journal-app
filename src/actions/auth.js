import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Manuel'));
        }, 3500);
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                const { uid, displayName } = user;
                dispatch(login(uid, displayName));
            })
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