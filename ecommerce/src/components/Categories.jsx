import React from 'react';
import Link from 'next/link';
import '@styles/Categories.scss';

const Categories = () => {
    return(
        <div className="mobile-menu">
            <ul>
                <li>
                    <Link href="/CATEGORIES">
                        CATEGORIES
                    </Link>
                </li>
                <li>
                    <Link href="/All">
                        All
                    </Link>
                </li>
                <li>
                    <Link href="/Clothes">
                        Clothes
                    </Link>
                </li>
                <li>
                    <Link href="/Electronics">
                        Electronics
                    </Link>
                </li>
                <li>
                    <Link href="/Furnitures">
                        Furnitures
                    </Link>
                </li>
                <li>
                    <Link href="/Toys">
                        Toys
                    </Link>
                </li>
                <li>
                    <Link href="/Others">
                        Others
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/">
                        My Orders
                    </Link>
                </li>
                <li>
                <Link href="/">
                        My Account
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/" className="email">
                        platzi@example.com
                    </Link>
                </li>
                <li>
                    <Link href="/" className="sign-out">
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Categories;