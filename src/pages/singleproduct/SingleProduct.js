import React, { useEffect, useState } from 'react'
import "./SingleProduct.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../api'



function SingleProduct() {

    const [product, setProduct] = useState(null)
    const [liked, setLiked] = useState(false);
    const [loading, setLoding] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoding(true)
        axios
            .get(`${API_URL}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoding(false))
    }, [])

    if (loading) {
        return <div className="loading">
            <div class="loader">
                <div class="load-inner load-one"></div>
                <div class="load-inner load-two"></div>
                <div class="load-inner load-three"></div>
                <span class="text">Loading...</span>
            </div>
        </div>
    }
    const toggleLike = () => {
        setLiked(!liked);
    };
    return (
        <div className='container'>
            <div className='singleproduct'>
                <img className='single__img' src={product?.image} alt="sg" />
                <div className="single__right">
                    <h2>Seeds Of Change Oraganic Quinoa, Brown</h2>
                    <p>({product?.rating.rate} Review)</p>
                    <div className="fost">
                        <h2 className='single__price'>$ {product?.price}</h2>
                        <h3>{product?.rating.count}</h3>
                    </div>
                    <p className='single__right__p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
                        odio minus dolore impedit fuga eum eligendi.
                    </p>
                    <div className="product__count">
                        <h2>Size/Weight :</h2>
                        <button>50kg</button>
                        <button>80kg</button>
                        <button>120kg</button>
                        <button>200kg</button>
                    </div>
                    <form className='element'>
                        <input className='element__inout' type="number" />
                        <h4 className='addtocart'>Add to cart</h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct