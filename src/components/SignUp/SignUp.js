import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';


const SignUp = () => {

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    // get email value
    const handEmailBlur = event => {
        setEmail(event.target.value)
    }

    // get password value
    const handPasswordBlur = event => {
        setPassword(event.target.value)
    }

    // get confirm password value
    const handconfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    // navigate after login
    if (user) {
        navigate('/')
    }

    // handle submit
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password Doesnot Match')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }



    return (
        <section>
            <div className="container">
                <div className="form-container">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
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

                        {/* Confirm Password */}
                        <div className="form-group">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input onBlur={handconfirmPasswordBlur} type="password" name="confirmpassword" id="confirmpassword" placeholder='Enter Your Confirm Password' required autoComplete='off' />
                        </div>
                        {/* Error Message */}
                        <div className="form-group">
                            <p className='error'>{error}</p>
                        </div>
                        {/* submit button */}
                        <div className="form-group">
                            <input type="submit" className='form-submit' value="Sign Up" />
                        </div>
                    </form>
                    <p>Already have an account <Link to='/login'>Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;