import React from 'react';
import Product from '../Product/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;

    let total = 0;

    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.time * product.quantity;

    }


    const notify = () => toast("YOUR ACTIVITY IS COMPLETE!");

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
            <div>
                <button onClick={notify} className="toast-button">Activity Completed</button>
                <ToastContainer />
            </div>

        </div>
    );
};


export default Cart;