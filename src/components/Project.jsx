import React from 'react';

const Project = () => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>Project Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat error fugiat aliquid eos doloremque minima repellendus similique neque corrupti!</p>
        <span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
          <ul>
            <li>React.js</li>
            <li>TailwindCSS</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export { Project };
