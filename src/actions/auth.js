import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';
import { noteLogout } from './notes';


export const startLoginEmailPassword = (email, password) => {
    // Retorna un callback
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                const { uid, displayName } = user;
                dispatch(login(uid, displayName));
                dispatch(finishLoading());
            })
            .catch((error) => {
                console.log(error);
                dispatch(finishLoading());
                Swal.fire('Error', error.message, 'error');
            });
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                // El "createUserWithEmailAndPassword()" solo recibe como parámetros un email
                // y una password, pero el nombre del usuario no nos lo proporciona, por ende
                // existe una función propia de firebase que se llama "updateProfile()" en las
                // nos permite modificar el name y así poder obtenerlo para nuestro uso.
                await user.updateProfile({ displayName: name });
                const { uid, displayName } = user;
                dispatch(login(uid, displayName));
            })
            .catch((error) => {
                console.log(error)
                Swal.fire('Error', error.message, 'error');
            });
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

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(noteLogout());
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}