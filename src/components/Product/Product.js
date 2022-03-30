import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6>{name}</h6>
                <p>Price: {price}</p>
            </div>
            <div className="product-info mt-47">
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='btn' onClick={() => props.handleAddToCart(props.product)}><span>Add to cart</span> <span><FontAwesomeIcon icon={faShoppingCart} /></span></button>
        </div>
    );
};

export default Product;