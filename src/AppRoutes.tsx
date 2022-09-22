import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import Login from './pages/Login/Login'
import Phones from './pages/Phones/Phones'
import Tablets from './pages/Tablets/Tablets'
import PC from './pages/PC/PC'
import Laptop from './pages/Laptop/Laptop'
import Software from './pages/Software/Software'
import Home from './pages/Home/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/laptop' element={<Laptop/>}/>
        <Route path='/tablets' element={<Tablets/>}/>
        <Route path='/phones' element={<Phones/>}/>
        <Route path='/pc' element={<PC/>}/>
        <Route path='/software' element={<Software/>}/>
      </Route>
      <Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-in' element={<Login/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes