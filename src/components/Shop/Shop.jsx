import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    // useEffect(()=>{
    //     const storedCart=getShoppingCart();

    //     //step-01  get id
    //     for (const id in storedCart) {
    //         // step-02 get the product using id
    //             const addedProduct=products.find(product=>product.id===id);
    //             //step-03 get the quantity of the product
    //             const quantity=storedCart[id];
    //             addedProduct.quantity=quantity;
    //     }

    // },[products]);


    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart=[];

        for (const id in storedCart) {
            const addedProduct = products.map(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
           

        }
        setCart(saveCart)
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;