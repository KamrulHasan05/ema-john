import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb2 } from '../../utilities/db';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb2(product.id)
    }
    return (
        <section>
            <div className="container">
                <div className="grid">
                    <div className="review-product">
                        {
                            cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={cart}>
                            <Link to='/shipment'>
                                <button className='common-btn d-flex align-center space-between'>Proceed Checkout <FontAwesomeIcon className='icon' icon={faCreditCard}></FontAwesomeIcon></button>
                            </Link>
                        </Cart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;