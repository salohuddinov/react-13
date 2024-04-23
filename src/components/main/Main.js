import React from 'react'
import './Main.css'
import { FcLike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import img1 from '../../images/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'
import img2 from '../../images/Frame 606.png'
import img3 from '../../images/Frame 610.png'
import img4 from '../../images/Frame 612.png'
import banner from '../../images/bannerimg.png'


function Main() {
    return (
        <div className='container'>
            <div className="main__title">
                <h2>Best Selling Products</h2>
                <button>Viev all</button>
            </div>
            <div className="wrapper">
                <div className="cardd">
                    <div class="card">
                        <div class="icon">
                            <img className='card__img' src={img1} alt="" />
                        </div>
                        <span>
                            <div className="icons">
                                <button className='icons__button'><FcLike /></button>
                                <button className='icons__button'> <FaEye /> </button>
                            </div>
                            <button className='add'>Add to Card</button>
                        </span>
                    </div>
                    <h2>The north coat</h2>
                    <div className="price">
                        <h3>$$260</h3>
                        <div className="star">
                            <div class="rating">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text"></label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text"></label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text"></label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text"></label>
                                <input checked="" type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text"></label>
                            </div>
                        </div>
                        <h4>(65)</h4>
                    </div>
                </div>
                <div className="cardd">
                    <div class="card">
                        <div class="icon">
                            <img className='card__img' src={img2} alt="" />
                        </div>
                        <span>
                            <div className="icons">
                                <button className='icons__button'><FcLike /></button>
                                <button className='icons__button'> <FaEye /> </button>
                            </div>
                            <button className='add'>Add to Card</button>
                        </span>
                    </div>
                    <h2>The north coat</h2>
                    <div className="price">
                        <h3>$$260</h3>
                        <div className="star">
                            <div class="rating">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text"></label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text"></label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text"></label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text"></label>
                                <input checked="" type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text"></label>
                            </div>
                        </div>
                        <h4>(65)</h4>
                    </div>
                </div>
                <div className="cardd">
                    <div class="card">
                        <div class="icon">
                            <img className='card__img' src={img3} alt="" />
                        </div>
                        <span>
                            <div className="icons">
                                <button className='icons__button'><FcLike /></button>
                                <button className='icons__button'> <FaEye /> </button>
                            </div>
                            <button className='add'>Add to Card</button>
                        </span>
                    </div>
                    <h2>The north coat</h2>
                    <div className="price">
                        <h3>$$260</h3>
                        <div className="star">
                            <div class="rating">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text"></label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text"></label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text"></label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text"></label>
                                <input checked="" type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text"></label>
                            </div>
                        </div>
                        <h4>(65)</h4>
                    </div>
                </div>
                <div className="cardd">
                    <div class="card">
                        <div class="icon">
                            <img className='card__img' src={img4} alt="" />
                        </div>
                        <span>
                            <div className="icons">
                                <button className='icons__button'><FcLike /></button>
                                <button className='icons__button'> <FaEye /> </button>
                            </div>
                            <button className='add'>Add to Card</button>
                        </span>
                    </div>
                    <h2>The north coat</h2>
                    <div className="price">
                        <h3>$$260</h3>
                        <div className="star">
                            <div class="rating">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text"></label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text"></label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text"></label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text"></label>
                                <input checked="" type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text"></label>
                            </div>
                        </div>
                        <h4>(65)</h4>
                    </div>
                </div>
            </div>
            <div className="banner__card">
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default Main