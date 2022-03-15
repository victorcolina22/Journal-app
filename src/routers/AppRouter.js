import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';


export const AppRouter = () => {
    const dispatch = useDispatch();

    // Condicional para renderizar vista de loading-page al cargar la información traída de
    // Firebase.
    const [checking, setChecking] = useState(true);

    // Condicional para verificar si el usuario está autenticado y mostrar las rutas a las que
    // puede acceder, sino se regresa al login.
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            // El signo "?" funciona en este caso preguntando primero que si el objeto "user"
            // contiene algo evaluará si existe el "uid", si no dará false.
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                const notes = await loadNotes(user.uid);
                dispatch(setNotes(notes));
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        })
    }, [dispatch, setChecking]);

    if (checking) {
        return (
            <div className='router__loading-page'>
                <h1>Wait...</h1>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute
                        path='/auth'
                        isAuthenticated={isLoggedIn}
                        component={AuthRouter} />
                    <PrivateRoute
                        exact
                        path='/'
                        isAuthenticated={isLoggedIn}
                        component={JournalScreen} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
