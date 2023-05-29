import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

export default function Home() {
  const [active, setActive] = useState(false);
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);
  const handleClick = () => {
    setActive(!active)
  }
  useEffect(() => {
    const Navbar = document.querySelector('.navbar')
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        if (!isIntersecting) {
          Navbar.classList.add('blacking');
        }
        else {
          Navbar.classList.remove('blacking');
        }
      },
      { rootMargin: "-200px" }
    );
    observer.observe(ref.current);
  }, [isIntersecting])
  return (
    <div ref={ref} id='Home' className='Home h-[100vh] relative overflow-hidden'>
      <div className='navbar flex justify-between absolute w-screen top-0 px-8 sm:px-20 py-3 items-center z-10'>
        <a href='/Home' className='text-white logo'>HH</a>
        <ul className='flex flex-row max-[991px]:hidden'>
          <li><a href='#Home' className='pr-4 active'>Home</a></li>
          <li><a href='#Bio' className='pr-4'>About</a></li>
          <li><a href='#Portfolio' className='pr-4'>Portfolio</a></li>
          <li><a href='#Services' className='pr-4'>Services</a></li>
          <li><a href='#Contact' className='pr-4'>Contact</a></li>
        </ul>
        <a href='#' className='navIcon' onClick={handleClick}>
          <span></span>
        </a>
      </div>
      <h1 className='absolute top-1/2 text-white left-1/2 -translate-x-1/2  w-[100%] text-[30px] md:text-[50px] text-center font-bold'>I'm Hadi Hussien<br />
        A Front End Developer
      </h1>
      <div className={active ? 'sidenav w-[100%] bg-white shadow text-black after:hidden sm:w-[30%] sm:h-screen fixed right-0 z-10 sm:after:block sm:after:left-[-100vw]'
        : 'sidenav  h-screen fixed -right-[266px] sm:after:left-[-220vw]'}>
        <a href='#' className='text-xl relative block' onClick={handleClick}>
          <FontAwesomeIcon className='absolute right-4 top-4' icon={faTimes} />
        </a>
        <ul className='flex flex-col pb-4 pt-12 sm:py-12 px-4'>
          <li className='mb-4' onClick={() => setActive(false)}><a href='#Home' className='pr-4 text-black hover:text-[#96bb7c] transition'>Home</a></li>
          <li className='mb-4' onClick={() => setActive(false)}><a href='#Portfolio' className='pr-4 text-black hover:text-[#96bb7c] transition'>Portfolio</a></li>
          <li className='mb-4' onClick={() => setActive(false)}><a href='#Services' className='pr-4 text-black hover:text-[#96bb7c] transition'>Services</a></li>
          <li className='mb-4' onClick={() => setActive(false)}><a href='#Contact' className='pr-4 text-black hover:text-[#96bb7c] transition'>Contact</a></li>
          <li className='mb-4' onClick={() => setActive(false)}><a href='#bio-content' className='pr-4 text-black hover:text-[#96bb7c] transition'>About</a></li>
        </ul>
      </div>
    </div>
  )
}
