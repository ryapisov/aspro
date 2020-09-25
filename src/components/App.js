import React from 'react'
import {Navigation} from "./navigation/Navigation"
import {Footer} from "./footer/Footer"
import {
  About, Banner, Blog, Connect, GetInTouch, OurWork,
  Pricing, Services, Stats, StatsVideo, Team, Testimonial
} from "./sections/index"

export default () => {
  return (
    <div className="app">
      <Navigation />
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
      <Footer />
    </div>
  )
}

