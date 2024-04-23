import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/product/Products'

function Wishlist() {
    const wishes = useSelector(state => state.Wishlist.value)
    return (
        <div>
            <h2>Wishlist</h2>
            <Products data={wishes} />
        </div>
    )
}

export default Wishlist