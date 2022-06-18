import React, { useContext } from 'react';
import addTocart from '@/icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss'

const ProductItem = ({product}) => {
    /* const [cart, setCart] = useState([]); */
    const { addToCart } = useContext(AppContext);
    const handleClick= (item) =>{
        addToCart(item);
    }
    return(
        <div className="product-card">
            <img src={product.category.image} alt={product.title}/>
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={()=>handleClick(product)}>
                    <img src={addTocart} alt=""/>
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;