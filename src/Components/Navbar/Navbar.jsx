import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Logo } from './Logo';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleNavigate =()=>{
    navigate('/contacts')
  }
  return (
  
   <nav className="w-full bg-transparent ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6" style={{ padding: '20px' }}>
        <div className="text-2xl font-bold text-orange-600  ">
        <Logo/>
        </div>
        <div className="hidden md:flex gap-2 items-center">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-400 font-bold bg-white py-2 shadow-xl px-5 rounded-xl" : "text-black transition duration-300 hover:text-orange-500 hover:scale-110 bg-transparent py-2 px-5 rounded-xl " }>Home</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-orange-400 font-bold bg-white py-2 shadow-xl px-5 rounded-xl" : "text-black transition duration-300 hover:text-orange-500 hover:scale-110 bg-transparent py-2 px-5 rounded-xl " }>Portfolio</NavLink>
        <NavLink to="/works" className={({ isActive }) => isActive ? "text-orange-400 font-bold bg-white py-2 shadow-xl px-5 rounded-xl" : "text-black transition duration-300 hover:text-orange-500 hover:scale-110 bg-transparent py-2 px-5 rounded-xl " }>Projects</NavLink>
        <NavLink to="/reviews" className={({ isActive }) => isActive ? "text-orange-400 font-bold bg-white py-2 shadow-xl px-5 rounded-xl" : "text-black transition duration-300 hover:text-orange-500 hover:scale-110 bg-transparent py-2 px-5 rounded-xl " }>Testimonial</NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? "text-orange-400 font-bold bg-white py-2 shadow-xl px-5 rounded-xl" : "text-black transition duration-300 hover:text-orange-500 hover:scale-110 bg-transparent py-2 px-5 rounded-xl " }>Contact me</NavLink>
          
        </div>
          <div className="button">
          <button onClick={handleNavigate}  class="relative px-8 py-3 font-semibold text-white hover:text-orange-500 shadow-2xl bg-orange-400 overflow-hidden group active:scale-95">
            <span class="absolute inset-0 w-full h-full bg-white transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
            <span class="absolute inset-0 w-full h-full border-2 border-orange-500 transition-all duration-300 ease-out transform scale-110 group-hover:scale-100"></span>
           <span class="relative z-10 transition-transform duration-300 group-hover:scale-110">Hire Me</span>
          </button>
          </div>
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden z-[999] bg-orange-400 rounded-lg h-screen absolute right-1 top-0 flex flex-col justify-evenly items-center ">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-8 py-4 " style={{ padding: '30px', }}>
            <NavLink to="/" className="text-black text-lg transition duration-300 hover:text-white" activeClassName="text-white font-semibold" onClick={toggleMenu} >Home</NavLink>
            <NavLink to="/portfolio" className="text-black text-lg transition duration-300 hover:text-white" activeClassName="text-white font-semibold" onClick={toggleMenu}> Portfolio</NavLink>
            <NavLink to="/works" className="text-black text-lg transition duration-300 hover:text-white" activeClassName="text-white font-semibold" onClick={toggleMenu}>Projects</NavLink>
            <NavLink to="/reviews" className="text-black text-lg transition duration-300 hover:text-white" activeClassName="text-white font-semibold" onClick={toggleMenu}>Testimonial</NavLink>
            <NavLink to="/contacts" className="text-black text-lg transition duration-300 hover:text-white" activeClassName="text-white font-semibold" onClick={toggleMenu}>Contact Me</NavLink>  
          </div>
        </div>
      )}
    </nav>

  )
}
