import React from 'react';

const Button = ({ children, buttonType }) => {
  return (
    <button className={`text-base md:text-lg w-full md:w-auto md:inline-block py-3 px-2 sm:px-7 rounded-xl ${buttonType === 'primary' ? 'bg-prussianBlue text-babyPowder' : buttonType === 'secondary' ? 'bg-gray-100 text-prussianBlue' : null} button-ring`}>
      { children }
    </button>
  );
};

export { Button };
