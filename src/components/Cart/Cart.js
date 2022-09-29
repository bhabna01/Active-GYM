import React from 'react';
import Product from '../Product/Product';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.time * product.quantity;

    }
    // const tax = (total * 0.1).toFixed(2);
    // const grandtotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <div className="person-info">
                <h1>Abier Farzana</h1>
                <h3>Student</h3>
                <h4>Age:23</h4>

            </div>

            <hr></hr>
            <div>
                <h3 style={{ color: "white" }}>Add A break</h3>
                <div className="btn">
                    <button className="btn-sec">10sec</button>
                    <button className="btn-sec">20sec</button>
                    <button className="btn-sec">30sec</button>
                    <button className="btn-sec">40sec</button>
                </div>

            </div>
            <hr></hr>

            <div>
                <h2 style={{ color: "white" }}>Excercise Details</h2>
                <h4 style={{ color: "white" }}>Excercise Time:{total}</h4>
                <h4 style={{ color: "white" }}>Break Time:</h4>
            </div>
            <button style={{ backgroundColor: "Pink", padding: "20px" }}>Activity Completed</button>
        </div>
    );
};

export default Cart;