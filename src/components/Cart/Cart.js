import React from 'react';
import './Cart.css'

const Cart = ({ cart, children }) => {

    let total = 0
    let shipping = 0
    let quantity = 0

    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }

    const tax = parseFloat((total * 0.1).toFixed(2))

    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p className='mt-10'>Selected Products: {quantity}</p>
            <p className='mt-10'>Total Price: $ {total}</p>
            <p className='mt-10'>Total Shipping Charge: $ {shipping} </p>
            <p className='mt-10'>Tax: $ {tax} </p>
            <h5 className='mt-10'>Grand Total: $ {grandTotal.toFixed(2)}</h5>
            {
                children
            }
        </div>
    );
};

export default Cart;