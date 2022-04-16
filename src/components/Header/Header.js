import logo from '../../images/Logo.svg'
import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <header>
            <div className="container">
                <div className="flex">
                    <div className="logo">
                        <Link to="/shop"><img src={logo} alt="logo" /></Link>
                    </div>
                    <nav>
                        <Link to="/shop">Shop</Link>
                        <Link to="/orders">Order Review</Link>
                        <Link to="/inventory">Inventory</Link>
                        {user?.uid ?
                            <Link to='#' onClick={handleSignOut}>Sign Out</Link>
                            :
                            <Link to="/login">Login</Link>
                        }
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;