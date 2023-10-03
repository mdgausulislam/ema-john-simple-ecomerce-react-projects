import React from 'react';

const Product = (props) => {
    const {img, name, seller, quantity, price} = props.product;
    return (
        <div>
            <img src={img} alt="" />
          
        </div>
    );
};

export default Product;