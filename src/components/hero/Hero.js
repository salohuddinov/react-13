import React from 'react'
import './Hero.css'
import { FaChevronRight } from "react-icons/fa";
import banner from '../../images/banner.png'


function Hero() {
    return (
        <div className='container'>
            <div className="hero">
                <div className="hero__left">
                    <h3>Woman’s Fashion <FaChevronRight className='hero__icon' /></h3>
                    <h3>Electronics <FaChevronRight className='hero__icon' /></h3>
                    <h3>Home & Lifestyle</h3>
                    <h3>Medicine</h3>
                    <h3>Sports & Outdoor</h3>
                    <h3>Baby’s & Toys</h3>
                    <h3>Groceries & Pets</h3>
                    <h3>Health & Beauty</h3>
                </div>
                <div className="hero__right">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero