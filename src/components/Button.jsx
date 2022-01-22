import React from 'react';

const Button = ({ children }) => {
  return (
    <button className='text-sm md:text-xl w-full md:w-auto md:inline-block py-3 px-2 md:px-12 rounded-full bg-principal'>
      { children }
    </button>
  );
};

export { Button };
