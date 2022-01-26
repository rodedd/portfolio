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

      <div className='grid justify-items-center items-center grid-cols-1 gap-4 mt-8 md:grid-cols-6 text-center'>
        <p className='text-3xl'>Hi there 👋</p>
        <img className='w-40 rounded-full md:order-2' src="https://res.cloudinary.com/rodedd/image/upload/v1642636411/portfolio/Perfil334_dslkod.jpg" alt="Eduardo Prado" />
        <h1 className='md:order-1 md:col-span-5 flex flex-col'>
          <span className='text-4xl font-bold'>I'm <span className='text-ultraRed'>Eduardo</span></span>
          <span className='text-3xl'>Front End Developer</span> 
        </h1>
        <p className='paragraph mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iste libero quidem, aperiam, neque ipsam vitae voluptate veniam.</p>
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