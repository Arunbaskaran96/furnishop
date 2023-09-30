import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topbar from '../topbar/Topbar'
import Home from '../home/Home'
import Categories from '../Categories/Categories'
import Third from '../Third/Third'
import Fourth from '../Fourth/Fourth'
import Reviews from '../Reviews/Reviews'
import Discount from '../Discount/Discount'
import Contact from '../Contact/Contact'

function Portal() {
  return (
        <div>
      <Topbar/>
      <Home/>
      <Categories/>
      <Third/>
      <Fourth/>
      <Reviews/>
      <Discount/>
      <Contact/>
    </div>
  )
}

export default Portal