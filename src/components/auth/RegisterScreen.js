import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {
    const state = useSelector(state => state);
    const { msgError } = state.ui;
    const dispatch = useDispatch()

    const [formValue, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = formValue;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'))
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'))
            return false;
        }

        dispatch(removeError());
        return true
    }

    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <h3 className='auth__title'>Register</h3>

            <form onSubmit={handleRegister}>
                {
                    msgError !== null &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }

                <input
                    className='auth__input'
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                    autoComplete='off' />

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

                <input
                    className='auth__input'
                    type="password"
                    placeholder='Confirm'
                    value={password2}
                    onChange={handleInputChange}
                    name='password2' />

                <button
                    className='btn btn-primary btn-block mb-5'
                    type='submit'>
                    Register
                </button>

                <Link
                    className='link'
                    to='/auth/login'>
                    Already registered?
                </Link>
            </form>
        </div>
    )
}
