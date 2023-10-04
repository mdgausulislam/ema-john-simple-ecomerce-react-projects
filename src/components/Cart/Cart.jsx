import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let totalPrice=0;
    let totalShipping=0;
    for (const product of cart) {
        totalPrice=totalPrice+product.price;
        totalShipping=totalShipping+product.shipping;
        console.log(totalPrice);
    }
    const tax=totalPrice*7/100;

    const grandTotal=(totalPrice+totalShipping+tax).toFixed(2);
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Selected Items:{cart.length} </p>
            <p>Total Price:${totalPrice}</p>
            <p>Shipping Charge:${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button>Clear Cart </button>
            <button>Review Order </button> 
        </div>

    );
};

export default Cart;