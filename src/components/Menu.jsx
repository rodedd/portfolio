import React, { useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Menu = ({ openMenu, isOpen, setIsOpen }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isOpen, setIsOpen])

  return (
    <div className='md:hidden'>
      <div className='fixed top-0 left-0 w-screen h-screen bg-black/60 z-10'></div>

      <div className='bg-babyPowder absolute top-2 -right-2 w-64 h-72 z-20 rounded-lg flex flex-col p-4 pb-6 appear-menu' ref={ref}>
        <div
          className='self-end cursor-pointer'
          onClick={openMenu}
        >
          <svg className="w-8 h-8 stroke-prussianBlue hover:stroke-ultraRed" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        <ul className='flex flex-col justify-between items-center mt-4 h-full text-prussianBlue text-xl font-roboto font-bold'>
          <li className='hover:text-ultraRed'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:text-ultraRed'>
            <Link to="/about">About</Link>
            </li>
          <li className='hover:text-ultraRed'>
            <Link to="/skills">Skills</Link>
          </li>
          <li className='hover:text-ultraRed'>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Menu };
