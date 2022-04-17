import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Checkout from './pages/Checkout/Checkout'
import BlogPage from './pages/BlogPage/BlogPage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import Header from './components/Header/Header'
import './App.css'
// import './css/responsive.css'

const App = () => {

  return (
    <>
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="blog" element={<BlogPage/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="signup" element={<SignUpPage/>}/>
    </Routes>
    </>
  )
}

export default App
