import React from "react"
import banner from "../../../images/banner.jpg"

export const Banner = () => {
  return (
    <section id="banner">
      <div className="content">
        <img src={banner} alt="aspro" className="banner"/>
      </div>
    </section>
  )
}