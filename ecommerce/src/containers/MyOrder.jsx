import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import style from '@styles/MyOrder.module.scss'

const MyOrder = () => {
	const { state } = useContext(AppContext);
    const sumTotal = () => {
        const reducer = (acc, currentValue) => acc + currentValue.price;
        const sum = state.cart.reduce(reducer,0);
        return sum;
    }
	return (
		<aside className={style.MyOrder}>
			<div className={style["title-container"]}>
				<Image src={arrow} alt="arrow" />
				<p className={style["title"]}>My order</p>
			</div>
			<div className={style["my-order-content"]}>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className={style["order"]}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link className={style["primary-button"]} href="/checkout">
					Checkout
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;