import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/static/Navbar/Navbar.jsx'
import Button from './Component/static/Button/Button.jsx'
import Home from './Component/dynamic/Home/Home.jsx'
import Category from './Component/dynamic/Category/Category.jsx'
import Products from './Component/dynamic/Products/Products.jsx'
import Create from './Component/dynamic/Create/Create.jsx'
import Quotes from './Component/Quotes/Quotes.jsx'
export default function App() {
  return (
   <>
    <Navbar/>
    
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/category' element={<Category/>}></Route>
    <Route path='/product' element={<Products/>}></Route>
    <Route path='/quotes' element={<Quotes/>}></Route>
    <Route path='/create' element={<Create/>}></Route>

   </Routes>

   </>
  )
}
