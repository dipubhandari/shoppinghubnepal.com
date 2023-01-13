import AiOutlineShoppingCart from 'react-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { BsBagX } from "react-icons/bs";
import { Category } from '../product_cate';
import { useEffect } from 'react';
import { useState } from 'react';

const Header = (props) => {
    // state for the categories 
    const [Categories, setCategories] = useState([])
    // fetching the categories from server on 
    useEffect(() => {
        setCategories(Category)
        // console.log(props)

    }, [])

//    n link
    return (

        <nav className='nav'>
            <section className='header_container'>
                {/* logo in the header section */}

                <section className="logo">
                    <Link to='/' className='homeLink'>   <h1>Shopping <span>Hub.</span></h1></Link>
                </section>
                {/* search bar in the header section */}

                <section className="search">
                    <input
                        placeholder='Search Products...'
                        type="text" />
                    {/* <FcSearch/> */}
                </section>
                {/* cart in the header section */}
                <section className="cart">
                    cart
                    <span className="carticon">
                        <span className='numshow'>0</span>
                        <BsBagX />
                    </span>
                </section>

            </section>


            <section className="navigationlink">

                {
                    Categories.map((category, id) => {

                        return <Link key={id} to={`/products/${category.category_name}`}
                            onClick={()=>props.clickedOnLink(Math.floor(Math.random()*100))}>{category.category_name}</Link>
                    })
                }

            </section>
        </nav>
    )
}

export default Header