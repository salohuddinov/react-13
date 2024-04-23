import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";




function Header() {
    return (
        <>
            <div className="container">
                <div className="header__top">
                    <div className="cent__title">
                        <h2>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h2>
                        <button>ShopNow</button>
                    </div>
                    <h3>English</h3>
                </div>
                <div className="header__bootm">
                    <div className="nav__item">
                        <h2>Exclusive</h2>
                        <div className="item__left">
                            <NavLink to={"/"}><h2>Home</h2></NavLink>
                            <h2>Contact</h2>
                            <NavLink to={"/about"}><h2>about</h2></NavLink>
                            <h2>Signup</h2>
                        </div>
                    </div>
                    <div className="header__right">
                        <form className='header__from'>
                            <input type="text" />
                            <button type='button'> <IoSearch /> </button>
                        </form>
                        <div className="icon">
                            <NavLink to={"/wishlist"}><button className='header__wish'><FaRegHeart /></button></NavLink>
                            <MdOutlineShoppingCart className='header__wish' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header