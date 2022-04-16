import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { name, price, shipping, img, quantity } = product
    return (
        <div className='review-item d-flex align-center'>
            <div className="remove-item-img">
                <img src={img} height={91} width={91} alt="" />
            </div>
            <div className="remove-item-content d-flex space-between align-center">
                <div className="info">
                    <h3 title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </h3>
                    <p>Price: $<span>{price}</span></p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p><small>Shipping: $<span>{shipping}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)}><FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;