import React from 'react'
import {Navigation} from "./navigation/Navigation"
import {Footer} from "./footer/Footer"
import {About} from "./sections/about/About"
import {Banner} from "./sections/banner/Banner"
import {Blog} from "./sections/blog/Blog"
import {Connect} from "./sections/connect/Connect"
import {GetInTouch} from "./sections/get_in_touch/GetInTouch"
import {OurWork} from "./sections/our_work/OurWork"
import {Pricing} from "./sections/pricing/Pricing"
import {Services} from "./sections/services/Services"
import {Stats} from "./sections/stats/Stats"
import {StatsVideo} from "./sections/stats_video/StatsVideo"
import {Team} from "./sections/team/Team"
import {Testimonial} from "./sections/testimonial/Testimonial"

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

