import React, { Profiler, useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Activity.css';



const Activity = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    useEffect(() => {
        localStorage.setItem('break-time', time);
    }, [time]);
    const handleBreakTime = (breakTime) => {
        setTime(breakTime);
    };
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {

            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart);
    }, [products])
    const handleClick = (SelectedProduct) => {
        console.log(SelectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === SelectedProduct.id);
        if (!exists) {
            SelectedProduct.quantity = 1
            newCart = [...cart, SelectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== SelectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(SelectedProduct.id);
    }
    return (
        <div className='activity-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={handleClick}
                    >
                    </Product>)
                }
            </div>

            <div className='cart-container '>
                <Cart cart={cart} handleBreakTime={handleBreakTime}></Cart>
            </div>
        </div>
    );
};

export default Activity;