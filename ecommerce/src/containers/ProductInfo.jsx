import React from 'react';
import close from '@icons/icon_close.png';
import cart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';

const ProductInfo = () => {
    return(
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src= {close} alt="close"/>
            </div>
            <img src="https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike"/>
                <div className="product-info">
                    <p>$35,00</p>
                    <p>Bike</p>
                    <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                    <button className="primary-button add-to-cart-button">
                        <img src={cart} alt="add to cart"/>
                            Add to cart
                    </button>
                </div>
        </aside>
    );
}

export default ProductInfo;