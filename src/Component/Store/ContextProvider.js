import React, { createContext, useState } from "react";

const CartContext = createContext();
// import {DummyList} from './List'


const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    const addItemToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.title === item.title);

        if (existingItem) {
            // Item already exists, update quantity
            const updatedCart = cartItems.map((cartItem) =>
                cartItem.title === item.title
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
            setCartItems(updatedCart);
        } else {
            // Item doesn't exist, add to cart
            setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
        }

        setCartItemCount((prevCount) => prevCount + 1);
    };
    const removeItemFromCart = (index) => {
        setCartItems((prevItems) => {
            const updatedCart = [...prevItems];
            updatedCart.splice(index, 1);
            return updatedCart;
        });
        setCartItemCount((prevCount) => prevCount - 1);
    };
    const clearCart = () => {
        setCartItems([]);
        setCartItemCount(0);
    };


    return (
        <CartContext.Provider value={{
            cartItems,
            addItemToCart,
            removeItemFromCart,
            clearCart,
            cartItemCount,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
export {ContextProvider, CartContext};