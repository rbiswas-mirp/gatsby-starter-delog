import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/submit-confession/">Submit a Confession</Link>
    <ThemeChanger/>
  </nav>
  
)
