import React from 'react';

const Button = ({ children, buttonType }) => {
  return (
    <button className={`text-sm md:text-xl w-full md:w-auto md:inline-block py-3 px-2 md:px-12 rounded-full ${buttonType === 'primary' ? 'bg-primary' : buttonType === 'secondary' ? 'bg-gray-200' : null}`}>
      { children }
    </button>
  );
};

export { Button };
