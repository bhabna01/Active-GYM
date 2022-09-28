import React from 'react';
import Product from '../Product/Product';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandtotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <div class="person-info">
                <h1>Abier Farzana</h1>
                <h3>Student</h3>
                <h4>Age:23</h4>

            </div>
            <hr></hr>
            {/* <h3>Order Summery</h3>
            <p>Selected Items:{quantity}</p>
            <p>Total price:{total}</p>
            <p>Total Shipping:{shipping}</p>
            <p>Tax:{tax}</p>
            <h5>Grand total:{grandtotal}</h5> */}
        </div>
    );
};

export default Cart;