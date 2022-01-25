import React from 'react';
import { Project } from '../components/Project';
import { Container } from '../layouts/Container';

const projects = [
  {
    name: 'Projecto X',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat error fugiat aliquid eos doloremque minima repellendus similique neque corrupti!',
    tags: ['React.js', 'tailwind'],
    liveUrl: 'https://github.com',
    githubUrl: 'https://google.com',
    image: 'https://anniebombanie.com/assets/work-personal-date-night.png',
  },
  {
    name: 'Projecto 12312',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat error fugiat aliquid eos doloremque minima repellendus similique neque corrupti!',
    tags: ['CSS', 'JavaScript'],
    liveUrl: 'https://github.com',
    githubUrl: 'https://google.com',
    image: 'https://anniebombanie.com/assets/work-personal-date-night.png',
  },
]

const Projects = () => {
  return (
    <Container>
        <div className='mb-10'>
          <h1 className='title'>Projects</h1>
          <h2 className='subtitle'>Some stuff I've built.</h2>
        </div>
        <div>
          {
            projects.map(project => (
              <Project
                key={project.name}
                name={project.name}
                description={project.description}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                image={project.image}
              />
            ))
          }
        </div>
    </Container>
  );
};

export { Projects };
