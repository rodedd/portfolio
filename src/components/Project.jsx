import React from 'react';
import { Button } from './Button';

const Project = ({ name, description, tags, liveUrl, githubUrl, image, index }) => {

  let mod = (index + 1) % 2;

  return (
    <div className='mb-20 sm:flex'>

      <div className={`w-full sm:w-1/2 ${mod === 0 ? 'sm:order-2' : ''}`}>
        <img className='mb-4' src={image} alt={name} />
      </div>

      <div className='sm:w-1/2'>
        <h3 className='font-baskerville font-bold text-2xl mb-4 text-prussianBlue'>{name}</h3>
        <p className='paragraph mb-4'>{description}</p>

        <div className='flex items-center mb-4'>
          <svg className="w-6 h-6 mr-2 min-w-[24px]" fill="none" stroke="#FF6978" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
          <span className='flex flex-wrap text-lg text-prussianBlue'>
            <span>
            {
              tags.map((tag, index) => (
                  <span key={tag}>{(index !== tags.length - 1) ? `${tag}, ` : `${tag}.`}</span>
              ))
            }
            </span>
          </span>
          
          {/* <ul className='flex flex-wrap text-lg text-prussianBlue'>
            {
              tags.map((tag, index) => (
                  <li key={tag}>{(index !== tags.length - 1) ? `${tag}, ` : `${tag}`}</li>
              ))
            }
          </ul> */}
        </div>

        <div className='w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3'>
          <a href={liveUrl} target='_blank' rel='noreferrer'>
            <Button buttonType='primary'>Live Demo</Button>
          </a>

          <a href={githubUrl} target='_blank' rel='noreferrer'>
            <button className='bg-gray-200 w-full p-3 rounded-xl sm:rounded-full flex justify-center space-x-1 sm:space-x-0 button-ring'>
              <span className='sm:hidden'>GitHub</span>
              <svg className='w-7 fill-prussianBlue' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
      {/* bg-ultraRed text-lg py-2 px-2 rounded-full inline-block w-full sm:w-44 text-center */}
    </div>
  );
};

export { Project };
