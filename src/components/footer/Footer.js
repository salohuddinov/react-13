import React from 'react'
import './Footer.css'
import img from '../../images/footer.png'
function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__card">
                        <h2>Exclusive</h2>
                        <h3>Subscribe</h3>
                        <p>Get 10% off your first order</p>
                    </div>
                    <div className="footer__card">
                        <h2>Exclusive</h2>
                        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                    <div className="footer__card">
                        <h2>Account</h2>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                    <div className="footer__card">
                        <h2>Quick Link</h2>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                    <div className="footer__card">
                        <h2>Download App</h2>
                        <h6>Save $3 with App New User Only</h6>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer