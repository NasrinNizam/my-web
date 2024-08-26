import React from 'react'
import '../Navbar/logo.css'
import { Link } from 'react-router-dom'
export const Logo = () => {
  return (
    <>
    <Link to='/' className="animation hover:scale-105 transition-all">
        <span class="a">N</span>
        <span>a</span>
        <span class="a">s</span>
        <span>r</span>
        <span class="a">i</span>
        <span>n</span>
    </Link>
    </>
  )
}
