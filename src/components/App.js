import React from 'react'
import {Header} from "./header/Header"
import {Footer} from "./footer/Footer"
import {About, Banner, Blog, Connect, GetInTouch, OurWork, Pricing,
  Services, Stats, StatsVideo, Team, Testimonial} from "./main/index"

  export default () => {
    return (
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <Banner />
          <About />
          <Connect />
          <Blog />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }





//export default () => {
//  return (
//    <>
//      <header>
//        <Header />
//      </header>

//    <div className="app">
//      <main>
//        <About />
//        <Banner />
//        <Blog />
//        <Connect />
//        <GetInTouch />
//        <OurWork />
//        <Pricing />
//        <Services />
//        <Stats />
//        <StatsVideo />
//        <Team />
//        <Testimonial />
//      </main>
//      <footer>
//        <Footer />
//      </footer>
//    </div>

//    </>
//  )
//}

