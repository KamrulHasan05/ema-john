import React from 'react';
import './Shop.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
// import { addToDb } from '../../utilities/fakedb';
import { addToDb2, getStoredCart } from '../../utilities/db';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getStoredCart()
        const savedProduct = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedProduct.push(addedProduct)
            }
        }
        setCart(savedProduct)
    }, [products])

    const handleAddToCart = selectedProduct => {
        const exitsProduct = cart.find(product => product.id === selectedProduct.id)
        let newCart = []
        if (!exitsProduct) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const restProduct = cart.filter(product => product.id !== selectedProduct.id)
            exitsProduct.quantity = exitsProduct.quantity + 1
            newCart = [...restProduct, exitsProduct]
        }

        setCart(newCart)
        addToDb2(selectedProduct.id)
    }


    return (
        <section>
            <div className="container">
                <div className="grid">
                    <div className="products-container">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            >
                            </Product>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={cart}>
                            <Link to='/orders'>
                                <button className='common-btn d-flex align-center space-between'>Review Order <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></button>
                            </Link>
                        </Cart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;