import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<Products/>}/>
        <Route path='/contact' element={<Products/>}/>
        <Route path='/products/:category' element={<Products />} />
        <Route path='/products/:category/:uuid' element={<Product />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes