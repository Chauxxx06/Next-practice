import Head from 'next/head';
import React from 'react';
import OrderItem from '@components/OrderItem';
import style from '@styles/OrderItem.module.scss';

const OrderList = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={style['my-order']}>
        <div className={style['my-order-container']}>
          <h1 className={style['title']}>My order</h1>

          <div className={style['my-order-content']}>
            <div className={style['order']}>
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </>
  );
};

export default OrderList;
