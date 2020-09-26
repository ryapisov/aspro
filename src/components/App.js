import React from 'react'
import {Header} from "./header/Header"
import {Footer} from "./footer/Footer"
import {About, Banner, Blog, Connect, GetInTouch, OurWork, Pricing,
  Services, Stats, StatsVideo, Team, Testimonial} from "./content/index"

export default () => {
  return (
    <div className="app">
      <div className="wrapper-header">
        <Header />
      </div>
      <div className="wrapper-content">
        <About />
        <Banner />
        <Blog />
        <Connect />
        <GetInTouch />
        <OurWork />
        <Pricing />
        <Services />
        <Stats />
        <StatsVideo />
        <Team />
        <Testimonial />
      </div>
      <div className="wrapper-footer">
        <Footer />
      </div>
    </div>
  )
}

