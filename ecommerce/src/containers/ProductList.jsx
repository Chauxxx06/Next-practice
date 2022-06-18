import React, {useEffect,useState} from 'react';
import useGetProducts from '@hooks/useGetProducts';
import ProductItem from '@components/ProductItem';
import style from '@styles/ProductItem.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const products = useGetProducts(API);
    return(
        <section className={style['main-container']}>
            <div className={style['cards-container']}>
                {products.map(product =>(
                    <ProductItem product={product} key={product.id}/>
                ))}

            </div>
        </section>
    );
}

export default ProductList;