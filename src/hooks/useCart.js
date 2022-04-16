import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/db';
const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storeCart = getStoredCart()
        const savedProduct = []
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storeCart[id]
                addedProduct.quantity = quantity
                savedProduct.push(addedProduct)
            }
        }
        setCart(savedProduct)
    }, [products])
    return [cart, setCart]
}
export default useCart;