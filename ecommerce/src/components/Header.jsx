import React, {useState, useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import shopcart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';
import style from '@styles/Header.module.scss';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
      <nav className={style.nav}>
        <Image src={menu} alt="menu" className={style['menu']} />
        <div className={style['navbar-left']}>
          <Link href="/">
            <Image src={logo} alt="logo" className={style['logo']} />
          </Link>
          <ul>
            <li>
              <Link href="/CATEGORIES">CATEGORIES</Link>
            </li>
            <li>
              <Link href="/All">All</Link>
            </li>
            <li>
              <Link href="/Clothes">Clothes</Link>
            </li>
            <li>
              <Link href="/Electronics">Electronics</Link>
            </li>
            <li>
              <Link href="/Furnitures">Furnitures</Link>
            </li>
            <li>
              <Link href="/Toys">Toys</Link>
            </li>
            <li>
              <Link href="/Others">Others</Link>
            </li>
          </ul>
        </div>
        <div className={style['navbar-right']}>
          <ul>
            <li className={style['navbar-email']} onClick={handleToggle} onKeyDown={handleToggle} role="presentation">
              platzi@example.com
            </li>
            <li className={style['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)} onKeyDown={() => setToggleOrders(!toggleOrders)} role="presentation">
              <Image src={shopcart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggle ? <Menu /> : ''}
        {toggleOrders ? <MyOrder /> : ''}
      </nav>
    );
};

export default Header;