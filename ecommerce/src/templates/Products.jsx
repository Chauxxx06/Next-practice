import React from 'react';
import Header from '../components/Header';
import ProductList from '../containers/ProductList';

const Products = () => {
    return(
        [
        <header>
            <Header />
        </header>,
        <main>
            <ProductList />
        </main>
        ]
    );
}

export default Products;