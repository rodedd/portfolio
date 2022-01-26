import React from 'react';

const Button = ({ children, buttonType }) => {
  return (
    <button className={`text-base md:text-xl w-full md:w-auto md:inline-block py-3 px-2 md:px-12 rounded-full ${buttonType === 'primary' ? 'bg-prussianBlue text-babyPowder' : buttonType === 'secondary' ? 'bg-gray-200 text-prussianBlue' : null}`}>
      { children }
    </button>
  );
};

export { Button };
