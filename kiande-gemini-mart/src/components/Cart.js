// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => (
    <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.map(item => (
            <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            </div>
        ))}
        <button>Proceed to Checkout</button>
    </div>
);

export default Cart;
