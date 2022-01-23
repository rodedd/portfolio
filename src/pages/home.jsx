import React from 'react';
import { Button } from '../components/Button';

const Home = () => {
  return (
    <main className='p-4'>
      <div className='grid justify-items-center items-center grid-cols-1 mt-8 md:grid-cols-6 text-center'>
        <img className='w-40 rounded-full md:order-2' src="https://res.cloudinary.com/rodedd/image/upload/v1642636411/portfolio/Perfil334_dslkod.jpg" alt="Eduardo Prado" />
        <h1 className='text-4xl mb-6 md:order-1 md:col-span-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quis aliquam.
        </h1>
      </div>

      <div className='space-y-3 md:space-x-4'>
        <Button>View my projects</Button>
        <Button>More about me</Button>
      </div>
    </main>
  )
};

export { Home };