const addToDb2 = id => {
    let shoppingCart = {}

    const storeCart = localStorage.getItem('shopping-cart')
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart)
    }

    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
    }
    else {
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
    let shoppingCart = {}

    const storeCart = localStorage.getItem('shopping-cart')
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart)
    }
    return shoppingCart
}

const removeFromDb2 = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart2 = () => {
    localStorage.removeItem('shopping-cart');
}



export {
    addToDb2,
    getStoredCart,
    removeFromDb2,
    deleteShoppingCart2
}