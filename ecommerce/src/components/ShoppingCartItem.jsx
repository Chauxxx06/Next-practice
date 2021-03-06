import React from 'react';
import arrow from '@icons/flechita.svg';
import Image from 'next/image';

const ShoppingCartItem = () => {
    return(
        <div className="order">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <Image src={arrow} alt="arrow"/>
        </div>
    );
};

export default ShoppingCartItem;