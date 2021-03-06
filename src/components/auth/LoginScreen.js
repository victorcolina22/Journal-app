import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {
    const state = useSelector(state => state);
    const { loading } = state.ui;
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <h3 className='auth__title'>Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    className='auth__input'
                    type="text"
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    autoComplete='off' />

                <input
                    className='auth__input'
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={handleInputChange}
                    name='password' />

                <button
                    className='btn btn-primary btn-block'
                    type='submit'
                    disabled={loading}>
                    Login
                </button>

                <div className='auth__social-networks'>
                    <p>Login with social networks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    className='link'
                    to='/auth/register'>
                    Create new account
                </Link>
            </form>
        </div>
    )
}
