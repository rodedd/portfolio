import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Container } from '../layouts/Container';

const Home = () => {
  return (
    <Container>
      <div className='relative my-10 md:my-20'>
      
        <div className='-z-10 absolute w-full h-full'>
          <div className='absolute -top-7 left-40 w-[500px] h-[500px] opacity-50 rounded-full circle-1'>
          </div>
          <div className='absolute -top-10 left-52 w-[500px] h-[500px] opacity-50 rounded-full circle-2'>
          </div>
        </div>

        <div className='grid justify-items-center items-center grid-cols-1 gap-4 mt-8 mb-8 text-center md:mt-0 md:text-left md:grid-cols-5 md:justify-items-start'>
          <p className='text-3xl text-prussianBlue md:hidden'>Hi there 👋</p>
          <img className='w-40 rounded-full md:order-5 md:justify-self-end md:self-center md:w-48' src="https://res.cloudinary.com/rodedd/image/upload/v1642636411/portfolio/Perfil334_dslkod.jpg" alt="Eduardo Prado" />
          
          <div className='space-y-3 md:order-1 md:col-span-4 md:space-y-5'>
            <p className='hidden md:block md:text-4xl text-prussianBlue'>Hi there! 👋</p>
            <h1 className='flex flex-col'>
              <span className='text-5xl md:text-5xl font-bold text-prussianBlue'>I'm <span className='text-ultraRed'>Eduardo</span>.</span>
            </h1>
            <p className='paragraph text-2xl mb-6 md:text-3xl'>I'm a Computer Science graduate specialized in Front End development. I'm constantly learning and evolving, with a passion to create things for the web.</p>
          </div>
        </div>

        <div className='flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0'>
          <Link to='/projects' className=''>
            <Button buttonType='primary'>View my projects</Button>
          </Link>
          <Link to='/about' className=''>
            <Button buttonType='secondary'>More about me</Button>
          </Link>
        </div>

      </div>
    </Container>
  )
};

export { Home };