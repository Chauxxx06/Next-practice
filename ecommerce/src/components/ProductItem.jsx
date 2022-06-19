import React, { useContext } from 'react';
import Image from 'next/image';
import addTocart from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';
import style from '@styles/ProductItem.module.scss';

const ProductItem = ({product}) => {
    /* const [cart, setCart] = useState([]); */
    const { addToCart } = useContext(AppContext);
    const handleClick= (item) =>{
        addToCart(item);
    };
    return(
        <div className={style["product-card"]}>
            <Image src={product.category.image} alt={product.title}/>
            <div className={style["product-info"]}>
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={()=>handleClick(product)} onKeyDown={()=>handleClick(product)} role="presentation">
                    <Image src={addTocart} alt=""/>
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;