import React from 'react';
import './Shop.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
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
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;