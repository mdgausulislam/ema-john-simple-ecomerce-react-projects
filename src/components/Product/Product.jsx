import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, quantity, price} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{seller}</p>
            <p>{quantity}</p>
            <p>{price}</p>
          
        </div>
    );
};

export default Product;