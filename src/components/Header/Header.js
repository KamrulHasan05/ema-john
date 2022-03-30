import logo from '../../images/Logo.svg'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="flex">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <nav>
                        <a href="/shop">Shop</a>
                        <a href="/order">Order Review</a>
                        <a href="/inventory">Manage Inventory</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;