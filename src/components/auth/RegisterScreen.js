import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

    const [formValue, handleInputChange] = useForm({
        name: 'Manuel',
        email: 'manuel@gmail.com',
        password: 123456,
        password2: 123456
    });
    const { name, email, password, password2 } = formValue;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            console.log('formulario correcto');
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            console.log('Name is required');
            return false;
        } else if (!validator.isEmail(email)) {
            console.log('Email is not valid');
            return false;
        } else if (password !== password2 || password.length < 5) {
            console.log('Password should be at least 6 characters and match each other');
            return false;
        }


        return true
    }

    return (
        <>
            <h3 className='auth__title'>Register</h3>

            <form onSubmit={handleRegister}>
                <div className="auth__alert-error">
                    Hola
                </div>

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
                    Login
                </button>

                <Link
                    className='link'
                    to='/auth/login'>
                    Already registered?
                </Link>
            </form>
        </>
    )
}
