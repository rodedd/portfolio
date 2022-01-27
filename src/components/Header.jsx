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
          <svg width="60" viewBox="0 0 440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40C0 17.9086 17.9086 0 40 0H200V40H0V40Z" fill="#A8DADC"/>
            <rect y="79.4643" width="200" height="40" fill="#A8DADC"/>
            <path d="M0 159H200V199H40C17.9086 199 0 181.091 0 159V159Z" fill="#A8DADC"/>
            <path d="M0 160L0 80L40 80L40 160H0Z" fill="#A8DADC"/>
            <path d="M240 0H400C422.091 0 440 17.9086 440 40V40H240V0Z" fill="#1D3557"/>
            <path d="M240 79H440V79C440 101.091 422.091 119 400 119H240V79Z" fill="#1D3557"/>
            <rect x="240" y="200" width="121" height="40" transform="rotate(-90 240 200)" fill="#1D3557"/>
          </svg>
          </Link>
        </div>

        <ul className='hidden md:flex md:justify-between w-96 font-roboto text-xl'>
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
        </ul>

        <div className='hidden cursor-pointer'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>

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
