import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    // get email value
    const handEmailBlur = event => {
        setEmail(event.target.value)
    }

    // get password value
    const handPasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (loading) {
        return <div className='spinner-body'><div className='loadingspinner'></div></div>
    }
    // navigate after login
    if (user) {
        navigate(from, { replace: true })
    }


    // handle form submit
    const handleSignInUser = event => {
        event.preventDefault()

        signInWithEmailAndPassword(email, password)

    }

    return (
        <section>
            <div className="container">
                <div className="form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSignInUser}>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handEmailBlur} type="email" name="email" id="email" placeholder='Enter Your Email Address' required autoComplete='off' />
                        </div>
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handPasswordBlur} type="password" name="password" id="password" placeholder='Enter Your Password' required autoComplete='off' />
                        </div>

                        {/* Error message */}
                        <div className="form-group">
                            <p>{error?.message}</p>
                        </div>

                        {/* submit button */}
                        <div className="form-group">
                            <input type="submit" className='form-submit' value="Login" />
                        </div>
                    </form>
                    <p>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Login;