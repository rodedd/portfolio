import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Menu } from './Menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className='flex w-full h-20'>
      <nav className='flex justify-between items-center w-screen relative'>
        <div>
          <NavLink to="/"> 
            <svg width="36" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path className='fill-celadonBlue' d="M0 40.201C0 17.9986 17.9986 0 40.201 0H200V40.201H0V40.201Z"/>
              <rect className='fill-powderBlue' y="79.8636" width="200" height="40.201"/>
              <path className='fill-powderBlue' d="M0 159.799H200V200H40.201C17.9986 200 0 182.001 0 159.799V159.799Z"/>
              <path className='fill-powderBlue' d="M0 160.804L0 80.402L40 80.402L40 160.804H0Z"/>
            </svg>
          </NavLink>
        </div>

        <ul className='hidden md:flex md:justify-between w-96 font-roboto text-lg text-prussianBlue'>
          <li className='navlink-hover'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'navlink-active' : null }>Home</NavLink>
          </li>
          <li className='navlink-hover'>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'navlink-active' : null }>About</NavLink>
            </li>
          <li className='navlink-hover'>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'navlink-active' : null }>Skills</NavLink>
          </li>
          <li className='navlink-hover'>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'navlink-active' : null }>Projects</NavLink>
          </li>
        </ul>

        <div className='hidden cursor-pointer'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>

        <div 
          className='absolute right-0 w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer md:hidden hover:button-ring'
          onClick={openMenu}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {isOpen ? <Menu openMenu={openMenu} isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
      </nav>
    </header>
  );
};

export { Header };
