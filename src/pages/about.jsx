import React from 'react';
import { Container } from '../layouts/Container';

const About = () => {
  return (
    <Container >
      <div className='text-center my-10 w-full'>
        <h1 className='title'>About me</h1>
        <h2 className='subtitle'>Who is Eduardo?</h2>
      </div>
      
      {/* <img className='rounded-xl w-full mb-4' src="https://res.cloudinary.com/rodedd/image/upload/v1642636411/portfolio/Perfil334_dslkod.jpg" alt="Eduardo Prado" /> */}

      <div className='text-lg'>
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
    </Container>
  );
};

export { About };
