import React from 'react';

const Project = ({ name, description, tags, liveUrl, githubUrl, image }) => {
  return (
    <div className='mb-12'>
      <div className='w-full'>
        <img src={image} alt="" />
      </div>
      
      <h3 className='text-xl mb-4'>{name}</h3>
      <p className='text-lg mb-4'>{description}</p>

      <span className='flex items-center mb-4'>
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
        <ul className='flex'>
          {
            tags.map(tag => (
              <li>{tag}</li>
            ))
          }
        </ul>
      </span>

      <div>
        <a className='bg-primary text-sm py-3 px-2 rounded-full inline-block w-24 text-center mr-4' href={liveUrl} target='_blank' rel='noreferrer'>
          Live Demo
        </a>
        <a className='bg-primary text-sm py-3 px-2 rounded-full inline-block w-32 text-center mr-10' href={githubUrl} target='_blank' rel='noreferrer'>
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export { Project };
