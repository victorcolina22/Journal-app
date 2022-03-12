import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';


export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            const { uid, displayName } = user;
            // El signo "?" funciona en este caso preguntando primero que si el objeto "user"
            // contiene algo evaluará si existe el "uid", si no dará false.
            if (user?.uid) {
                dispatch(login(uid, displayName));
            }

            setChecking(false);
        })
    }, [dispatch, setChecking]);

    if (checking) {
        return (
            <div className='router__loading-page'>
                <h1>Espere...</h1>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/auth' component={AuthRouter} />
                    <Route exact path='/' component={JournalScreen} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
