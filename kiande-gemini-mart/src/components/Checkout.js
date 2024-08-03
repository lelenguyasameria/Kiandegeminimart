// src/components/Checkout.js
import React from 'react';
import './Checkout.css';

const Checkout = () => (
    <div className="checkout">
        <h2>Checkout</h2>
        <form>
            <div>
                <label>Shipping Address</label>
                <input type="text" name="address" />
            </div>
            <div>
                <label>Payment Method</label>
                <input type="text" name="payment" />
            </div>
            <button type="submit">Place Order</button>
        </form>
    </div>
);

export default Checkout;
