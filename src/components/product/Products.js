import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from "axios";
import { API_URL } from "../../api"
import { Link } from 'react-router-dom'
import Skeleton from '../skeleton/Skeleton'
import { FcLike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleToWishles } from '../../context/wishlistSlice';




function Products() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(4)
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoryValue, setCategoryValue] = useState("all")
    const dispatch = useDispatch()

    useEffect(() => {
        axios
            .get(`${API_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setLoading(true)
        let url = categoryValue === "all" ?
            `${API_URL}?limit=${count}` :
            `${API_URL}/category/${categoryValue}?limit=${count}`
        axios
            .get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [count, categoryValue])

    const getCategory = (text) => {
        setCategoryValue(text)
        setData([])
    }


    let products = data?.map(el => (
        <div key={el.id} className="cardd">
            <Link to={`/product/${el.id}`}>
                <div class="card">
                    <div class="icon">
                        <img src={el.image} alt="" />
                    </div>
                    <span>
                        <div className="icons">
                            <button className='icons__button'><FcLike /></button>
                            <button className='icons__button'> <FaEye /> </button>
                        </div>
                        <button className='add'>Add to Card</button>
                    </span>
                </div>
            </Link>
            <h2>{el.title}</h2>
            <div className="price">
                <h3>${el.price}</h3>
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
                <h4>({el.rating.count})</h4>
            </div>
            <button onClick={() => dispatch(toggleToWishles(el))}> like </button>
        </div>
    ))
    let categoryItems = categories?.map((el, inx) => <li onClick={() => setCategoryValue(el)} key={inx}> {el} </li>)
    return (
        <>
            {loading && <Skeleton />}
            <div className="container">
                <ul>
                    <li onClick={() => getCategory("all")}>All</li>
                    {categoryItems}
                </ul>
                <div className="wrapper">
                    {products}
                </div>
                <button onClick={() => setCount(p => p + 4)} className='btn-see'>See more</button>
            </div>
        </>
    )
}

export default Products