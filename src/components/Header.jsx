import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex w-full h-20'>
      <nav className='flex justify-between items-center w-screen'>
        <div>
          <Link to="/"> 
            <img className='w-28 rounded-full' src="" alt="Eduardo Prado" />
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

        <div className='w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer md:hidden'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export { Header };
