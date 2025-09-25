import React from 'react'
import Navbar from './header/Navbar'
// import { Outlet } from 'react-router-dom'
import Banner from '../components/banner/Banner'
import OfferCards from '../components/offer/OfferCards'
import Menu from '../components/itemlist/Menu'
import Feane from '../components/Feane/Feane'
import Testimonial from '../components/Testimonial/Testimonial'
import BookTable from '../components/BookTable/BookTable'
import Footer from './footer/Footer'



const weblayout = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <OfferCards/>
      <Menu/>
      <Feane/>
      <Testimonial/>
      <BookTable/>
      <Footer/>
      
    </>
  )
}

export default weblayout
