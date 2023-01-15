import React, { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import { useLocation } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import './App.css'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

const App = () => {



  // state for rerendering the product component while clicked on link
  const [clickedOnNavigation, setClickedOnNavigation] = useState('')
  const clickedOnLink = (random) => {
    setClickedOnNavigation(random)
  }
  // state for rerendering the product component while clicked on link

  // state for header hide while login route and create account route

  const [isLoginSignUpPage, setLoginSignup] = useState(false)

  const isAccountPage = (random) => {
    setLoginSignup(random)
  }
  // setting the nav seen while in other component except login 

  return (
    <BrowserRouter>
      <div className='header'>
        {/* hiding the header component in loign and signup routes */}

        {(!isLoginSignUpPage) && <Header clickedOnLink={clickedOnLink} className='header' />}

      </div>
      <section>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products/:categoryname' element={<Products clickedOnNavigation={clickedOnNavigation} />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<Login isAccountPage={isAccountPage} />}></Route>
          <Route path='/newaccount' element={<Signup isAccountPage={isAccountPage} />}></Route>
          <Route path='*' element={<h1>PAGE NOT FOUND !</h1>}></Route>
          {/* <Home /> */}

        </Routes>

      </section>
    </BrowserRouter>

  )
}

export default App