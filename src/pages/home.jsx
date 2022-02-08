import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Container } from '../layouts/Container';

const Home = () => {
  return (
    <Container>
      <div className='relative my-10 md:my-20'>
      
        {/* <div className='-z-10 absolute w-full h-full'>
          <div className='absolute -top-7 left-40 w-[500px] h-[500px] opacity-50 rounded-full circle-1'>
          </div>
          <div className='absolute -top-10 left-52 w-[500px] h-[500px] opacity-50 rounded-full circle-2'>
          </div>
        </div> */}
        <div className='-z-10 absolute w-full h-full'>

          <div className='absolute w-[500px] circle1-animation md:circle1-animation-md'>
            <svg className='fill-celadonBlue w-[500px]' viewBox="0 0 190 190" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.4,-76.9C61.8,-73.7,74.2,-61.8,80.8,-47.6C87.4,-33.3,88.4,-16.6,88.2,-0.1C88,16.4,86.6,32.8,76.9,41.9C67.3,50.9,49.3,52.6,35.1,56.1C20.9,59.7,10.5,65,-1.8,68.2C-14.1,71.4,-28.2,72.4,-36.9,65.6C-45.6,58.9,-48.9,44.5,-54.1,32.3C-59.3,20.1,-66.5,10,-66.7,-0.1C-67,-10.3,-60.3,-20.6,-52.3,-28.1C-44.4,-35.6,-35.1,-40.2,-26.2,-46.6C-17.3,-52.9,-8.6,-61,3.9,-67.7C16.5,-74.5,33,-80.1,47.4,-76.9Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className='absolute w-[500px] circle2-animation md:circle2-animation-md'>
            <svg className='fill-ultraRed w-[500px]' viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.6,-49.7C40.4,-42.7,55.5,-41.8,62.3,-34.5C69,-27.2,67.5,-13.6,67.7,0.2C68,13.9,70.1,27.8,66.5,40.6C63,53.4,53.7,65.1,41.6,66C29.6,66.9,14.8,57,4.2,49.8C-6.5,42.6,-13,38.1,-27.2,38.5C-41.5,38.9,-63.5,44.1,-67.9,38.5C-72.3,32.9,-59.1,16.5,-55.1,2.3C-51,-11.8,-56.2,-23.6,-56.7,-37.8C-57.2,-51.9,-53.1,-68.4,-42.9,-76.3C-32.7,-84.2,-16.3,-83.6,-4,-76.7C8.4,-69.8,16.8,-56.8,28.6,-49.7Z" transform="translate(100 100)" />
            </svg>
          </div>

        </div>

        <div className='grid justify-items-center items-center grid-cols-1 gap-4 mt-8 mb-8 text-center md:mt-0 md:text-left md:grid-cols-5 md:justify-items-start'>
          <p className='text-3xl text-prussianBlue md:hidden'>Hi there 👋</p>
          <img className='drop-shadow-xl w-40 rounded-full md:order-5 md:justify-self-end md:self-center md:w-48' src="https://res.cloudinary.com/rodedd/image/upload/v1643830415/portfolio/avatar_ybe2bn.jpg" alt="Eduardo Prado" />
          
          <div className='space-y-3 md:order-1 md:col-span-4 md:space-y-5'>
            <p className='hidden md:block md:text-4xl text-prussianBlue'>Hi there! 👋</p>
            <h1 className='flex flex-col'>
              <span className='text-5xl md:text-5xl font-bold text-prussianBlue'>I'm <span className='text-ultraRed'>Eduardo</span>.</span>
            </h1>
            <p className='paragraph text-2xl mb-6 md:text-3xl'>I'm a Computer Science graduate specialized in Front End development. I'm constantly learning and evolving, with a passion to create things for the web.</p>
          </div>
        </div>

        <div className='flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0'>
          <Link to='/projects'>
            <Button buttonType='primary'>View my projects</Button>
          </Link>
          <Link to='/about'>
            <Button buttonType='secondary'>More about me</Button>
          </Link>
        </div>

      </div>
    </Container>
  )
};

export { Home };