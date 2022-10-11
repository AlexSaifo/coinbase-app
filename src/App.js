import React from 'react'
import About from './components/About'
import DailyPrices from './components/DailyPrices'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Newsletter from './components/Newsletter'
import RoadMap from './components/RoadMap'
import Services from './components/Services'
import SignUpNote from './components/SignUpNote'
import ScrollToTop from './components/UI/ScrollToTop'

export default function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Home/>
      <DailyPrices/>
      <About/>
      <Services/>
      <SignUpNote/>
      <RoadMap/>
      <Newsletter/>
      <Footer/>
      <ScrollToTop/>
    </React.Fragment>
  )
}
