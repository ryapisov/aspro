import React from "react"
import {Brand} from "./brand/Brand"
import {Menu} from "./menu/Menu"

export const Header = () => {
  return (
    <div className="header">
      <Brand />
      <Menu />
    </div>
  )
}