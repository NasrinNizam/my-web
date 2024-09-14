import React from 'react'
import '../Navbar/logo.css'
import { Link } from 'react-router-dom'
export const Logo = () => {
  return (
    <>
    <Link to='/' className="animation hover:scale-105 transition-all md:text-[30px] text-[20px] ">
        <span className="a">N</span>
        <span>a</span>
        <span className="a">s</span>
        <span>r</span>
        <span className="a">i</span>
        <span>n</span>
    </Link>
    </>
  )
}
