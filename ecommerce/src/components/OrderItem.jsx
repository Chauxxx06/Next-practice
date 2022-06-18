import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png'

const OrderItem = ({product}) => {
    const { removeToCart } = useContext(AppContext);
    const handleRemove = product => {
        removeToCart(product);
    }
    return(
        <div className="shopping-cart">
            <figure>
                <img src={product.category.image} alt={product.title}/>
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={close} alt="close" onClick={() => handleRemove(product)}/>
        </div>
    );
}

export default OrderItem;