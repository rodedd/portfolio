import React from 'react';
import { Container } from '../layouts/Container';

const About = () => {
  return (
    <Container >
      <div className='my-10 w-full'>
        <h1 className='title'>About me</h1>
        <h2 className='subtitle'>Who is Eduardo?</h2>
      </div>
      

      <div className='w-full text-lg'>
        <div className='min-w-[180px] sm:w-1/4 sm:mr-8 sm:float-left shape-outside'>
          <img className='rounded-full w-full max-w-xs mb-10 mx-auto' src="https://res.cloudinary.com/rodedd/image/upload/v1642636411/portfolio/Perfil334_dslkod.jpg" alt="Eduardo Prado" />
        </div>
        <div className=''>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit corporis quis doloremque ad. Et voluptate odit corrupti repudiandae! Quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, debitis neque dolor laboriosam a culpa odit consectetur eum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit corporis quis doloremque ad. Et voluptate odit corrupti repudiandae! Quos.
          </p>
        </div>
      </div>
    </Container>
  );
};

export { About };
