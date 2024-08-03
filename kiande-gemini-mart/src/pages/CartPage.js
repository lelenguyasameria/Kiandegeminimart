// src/pages/CartPage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';
import './CartPage.css';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        // Example cart items, fetch from API or state management in real implementation
    ]);

    return (
        <div>
            <Header />
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default CartPage;
