import React from 'react';
import ShoppingCartItem from '@components/ShoppingCartItem';
import '@styles/ShoppingCartList.scss'

const ShoppingCartList = () => {
    return(
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>
                <div className="my-order-content">
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                </div>
            </div>
        </div>
    );
}

export default ShoppingCartList;