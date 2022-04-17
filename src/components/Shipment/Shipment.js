import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user] = useAuthState(auth)

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')


    // get email value
    const handNameBlur = event => {
        setName(event.target.value)
    }

    // get address value
    const handAddressBlur = event => {
        setAddress(event.target.value)
    }

    // get confirm address value
    const handPhoneBlur = event => {
        setPhone(event.target.value)
    }

    const handleShipment = event => {
        event.preventDefault()
    }


    return (
        <section>
            <div className="container">
                <div className="form-container">
                    <h2>Ship Details</h2>
                    <form onSubmit={handleShipment}>
                        {/* Name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input onBlur={handNameBlur} type="text" name="name" id="name" placeholder='Enter Your Name' required autoComplete='off' />
                        </div>

                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} type="email" name="email" id="email" placeholder='Enter Your Email Address' disabled />
                        </div>

                        {/* address */}
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input onBlur={handAddressBlur} type="text" name="address" id="address" placeholder='Enter Your address' required autoComplete='off' />
                        </div>

                        {/* Confirm address */}
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input onBlur={handPhoneBlur} type="text" name="phone" id="phone" placeholder='Enter Your Phone Number' required autoComplete='off' />
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
                    {/* <p>Already have an account <Link to='/login'>Login</Link></p> */}
                </div>
            </div>
        </section>
    );
};

export default Shipment;