import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import style from '@styles/OrderItem.module.scss';
import Image from 'next/image';

const OrderItem = ({product}) => {
    const { removeToCart } = useContext(AppContext);
    const handleRemove = product => {
        removeToCart(product);
    };
    return(
        <div className={style["shopping-cart"]}>
            <figure>
                <img src={product?.category.image} alt={product?.title}/>
            </figure>
            <p>{product?.title}</p>
            <p>${product?.price}</p>
            <Image src={close} alt="close" onClick={() => handleRemove(product)} onKeyDown={() => handleRemove(product)}/>
        </div>
    );
};

export default OrderItem;