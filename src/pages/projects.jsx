import React from 'react';
import { Project } from '../components/Project';
import { Container } from '../layouts/Container';

const Projects = () => {
  return (
    <Container>
        <div className='mb-10'>
          <h1 className='title'>Projects</h1>
          <h2 className='subtitle'>Some stuff I've built.</h2>
        </div>
        <div>
          <Project />
          <Project />
        </div>
    </Container>
  );
};

export { Projects };
