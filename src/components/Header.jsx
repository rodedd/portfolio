import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Menu } from './Menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);


  return (
    <header className='flex w-full h-20'>
      <nav className='flex justify-between items-center w-screen relative'>
        <div>
          <Link to="/"> 
            <svg className='logo' width="90" height="48" viewBox="0 0 484 484" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g className='logo-e'>
                <rect width="300" height="65.641" rx="20" fill="#457B9D"/>
                <rect y="334.359" width="300" height="65.641" rx="20" fill="#457B9D"/>
                <rect y="400" width="400" height="71.1111" rx="20" transform="rotate(-90 0 400)" fill="#457B9D"/>
                <rect y="167" width="300" height="66" rx="20" fill="#457B9D"/>
              </g>
              <g className='logo-p'>
                <rect x="184" y="84" width="299.889" height="65.641" rx="20" fill="#FF6978"/>
                <rect x="184" y="251.18" width="299.889" height="65.641" rx="20" fill="#FF6978"/>
                <rect x="412.915" y="316.82" width="232.821" height="71.0848" rx="20" transform="rotate(-90 412.915 316.82)" fill="#FF6978"/>
                <rect x="184" y="484" width="400" height="71.0848" rx="20" transform="rotate(-90 184 484)" fill="#FF6978"/>
              </g>
            </svg>
          </Link>
        </div>

        <ul className='hidden md:flex md:justify-between w-96 font-roboto'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
            </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <div className='cursor-pointer'>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
          </li>
        </ul>

        <div 
          className='w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer md:hidden'
          onClick={openMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {isOpen ? <Menu openMenu={openMenu} /> : null}
      </nav>
    </header>
  );
};

export { Header };
