import React from 'react';

import { Link } from 'react-router-dom';

const Menu = ({ openMenu }) => {
  return (
    <div className='md:hidden'>
      <div className='fixed top-0 left-0 w-screen h-screen bg-black/40 z-10'></div>

      <div className='bg-babyPowder absolute top-2 -right-2 w-64 h-72 z-20 rounded-lg flex flex-col p-4 pb-6 appear-menu'>
        <div
          className='self-end cursor-pointer'
          onClick={openMenu}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        <ul className='flex flex-col justify-between items-center mt-4 h-full text-xl'>
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
      </div>
    </div>
  );
};

export { Menu };
