import React from 'react';
import { Button } from '../components/Button';
import { Container } from '../layouts/Container';

const Home = () => {
  return (
    <Container>
      <main className='p-4 relative'>
      
      <div className='-z-10 absolute'>
        <div className='absolute top-0 left-12 w-[600px] h-[600px] opacity-50 rounded-full circle-1'>
        </div>
        <div className='absolute top-12 left-64 w-[600px] h-[600px] opacity-50 rounded-full circle-2'>
        </div>
      </div>

      <div className='grid justify-items-center items-center grid-cols-1 mt-8 md:grid-cols-6 text-center'>
        <img className='w-40 rounded-full mb-2 md:order-2' src="https://res.cloudinary.com/rodedd/image/upload/v1642636411/portfolio/Perfil334_dslkod.jpg" alt="Eduardo Prado" />
        <h1 className='text-4xl font-semibold mb-6 md:order-1 md:col-span-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quis aliquam.
        </h1>
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