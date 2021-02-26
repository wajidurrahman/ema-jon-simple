import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
        </div>
    );
};

export default Cart;