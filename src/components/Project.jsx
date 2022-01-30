import React from 'react';

const Project = ({ name, description, tags, liveUrl, githubUrl, image, index }) => {

  let par = (index + 1) % 2;

  return (
    <div className='mb-20 sm:flex'>

      <div className={`w-full sm:w-1/2 ${par === 0 ? 'sm:order-2' : ''}`}>
        <img className='mb-4' src={image} alt={name} />
      </div>

      <div className='sm:w-1/2'>
        <h3 className='font-baskerville text-2xl mb-4'>{name}</h3>
        <p className='paragraph mb-4'>{description}</p>

        <span className='flex items-center mb-4'>
          <svg className="w-6 h-6 mr-2" fill="none" stroke="#FF6978" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
          <ul className='flex text-lg text-prussianBlue'>
            {
              tags.map((tag, index) => (
                <li key={tag}>{(index ? ', ' : '') + tag}</li>
              ))
            }
          </ul>
        </span>

        <div className='w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
          <a className='bg-ultraRed text-lg py-2 px-2 rounded-full inline-block w-full sm:w-44  text-center' href={liveUrl} target='_blank' rel='noreferrer'>
            Live Demo
          </a>
          <a className='bg-ultraRed text-lg py-2 px-2 rounded-full inline-block w-full sm:w-44 text-center' href={githubUrl} target='_blank' rel='noreferrer'>
            GitHub
          </a>
        </div>
      </div>
      
    </div>
  );
};

export { Project };
