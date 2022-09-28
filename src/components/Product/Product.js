
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { category, img, discription, age, time } = props.product;
    const { handleClick } = props
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{category}</p>
                <p><small>{discription}</small></p>
                <p><small>For Age:{age}</small></p>
                <p><small>Time Required:{time}m</small></p>
            </div>
            <button onClick={() => handleClick(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>

            </button>
        </div>
    );
};

export default Product;