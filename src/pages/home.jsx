import React from 'react';
import { Button } from '../components/Button';
import { Container } from '../layouts/Container';

const Home = () => {
  return (
    <Container grid={false}>
      <main className='p-4 relative'>
      
      <div className='-z-10 absolute'>
        <div className='absolute top-0 left-0 w-[600px] h-[600px] opacity-50 rounded-full circle-1'>
        </div>
        <div className='absolute top-12 left-20 w-[600px] h-[600px] opacity-50 rounded-full circle-2'>
        </div>
      </div>

      <div className='grid justify-items-center items-center grid-cols-1 gap-4 mt-8 mb-8 text-center md:mt-0 md:text-left md:grid-cols-7 md:grid-rows-3 md:justify-items-start'>
        <p className='text-3xl md:text-4xl md:order-1 md:col-span-7 md:self-end'>Hi there 👋</p>
        <img className='w-40 rounded-full md:order-3 md:row-span-2 md:col-span-2 md:justify-self-end md:self-center md:w-48' src="https://res.cloudinary.com/rodedd/image/upload/v1642636411/portfolio/Perfil334_dslkod.jpg" alt="Eduardo Prado" />
        <h1 className='flex flex-col md:order-2 md:col-span-5'>
          <span className='text-5xl md:text-5xl font-bold'>I'm <span className='text-ultraRed'>Eduardo</span></span>
          <span className='text-3xl md:text-4xl'>Front End Developer</span> 
        </h1>
        <p className='paragraph text-2xl mb-6 md:order-3 md:col-span-5 md:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iste libero quidem, aperiam, neque ipsam vitae voluptate veniam.</p>
      </div>

      <div className='space-y-3 md:space-x-4'>
        <Button buttonType='primary'>View my projects</Button>
        <Button buttonType='secondary'>More about me</Button>
      </div>

    </main>
    </Container>
  )
};

export { Home };