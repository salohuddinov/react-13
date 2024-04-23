import React from 'react'
import './Home.css'
import Products from '../../components/product/Products'
import Hero from '../../components/hero/Hero'
import Main from '../../components/main/Main'

function Home() {

    return (
        <>
            <Hero />
            <Main />
            <Products />
        </>
    )
}

export default Home