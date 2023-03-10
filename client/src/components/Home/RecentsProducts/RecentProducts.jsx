import { FaCartPlus } from "react-icons/fa";
import React from 'react'
import './RecentProducts.css'
import { Link } from "react-router-dom";
import { ProductsDetails } from '../../Products/Product'
import { useState } from "react";
import { add } from "../../../redux/cartSlice";
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from "react";


const Products = () => {
  // state for products coming from server
  const [Products, setProducts] = useState([])

  // loading the products to the products state on rendering
  useEffect(() => {
    setProducts(ProductsDetails)
  }, [])

  // redux sending the item to the store while clicking on the cart
  const dispatch = useDispatch()
  const ADD_TO_CART = (products) => {
    dispatch(add(products))
    // 
    toast.success('Added To Cart')
  }
  // redux sending the item to the store while clicking on the cart



  return (
    <section className='product_container'>
      <h1>Products</h1>
      <section className="product_card">
        {/* Displyaing product from products state */}
        {

          Products.map((product, index) => {
            return <section className='product_box' key={index}>
              <span className="product_categories">
                {/* showing the category of the item */}
                {product.category}
              </span>
              <Link to={`/product-detail/${product.id}`} className='product_link'>
                <section className="product_image">
                  <img src={product.img} alt="" />
                </section>
                <section className="product_name">
                  <h3> {product.name}</h3>
                </section>
              </Link>
              <section className="product_details">
                <section className="product_price">
                  Rs. {product.price}
                </section>
                <section className="add_to_cart" onClick={() => ADD_TO_CART(product)}>
                  <FaCartPlus />
                </section>
              </section>
            </section>

          })
        }
        {/* Displyaing product from products state till here*/}

        {/* first  */}

      </section>
    </section>
  )
}

export default Products