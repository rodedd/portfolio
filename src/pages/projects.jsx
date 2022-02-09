import React from 'react';
import { Project } from '../components/Project';
import { Container } from '../layouts/Container';

const projects = [
  {
    name: '100tifico',
    description: 'This project is called 100tifico. It is a Single Page Application (SPA) that shows information about characters from Rick & Morty using the Rick & Morty API https://rickandmortyapi.com/',
    tags: ['JavaScript', 'CSS', 'HTML', 'webpack', 'Babel', 'Travis CI'],
    liveUrl: 'https://rodedd.github.io/spa-rickandmorty/',
    githubUrl: 'https://github.com/rodedd/spa-rickandmorty',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365753/portfolio/projects/100tifico_dszbud.png',
  },
  {
    name: 'Animationland',
    description: 'Animationland is a simple game inspired by Alice in Wonderland movie.',
    tags: ['CSS', 'HTML'],
    liveUrl: 'https://rodedd.github.io/animationland-game/',
    githubUrl: 'https://github.com/rodedd/animationland-game',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365752/portfolio/projects/animationland_a4fixz.png',
  },
  {
    name: 'To Do App',
    description: 'This is a classic To-Do App created using React.',
    tags: ['React', 'CSS', 'Local Storage API'],
    liveUrl: 'https://to-do-app-bo6kt3g55-rodedd.vercel.app/',
    githubUrl: 'https://github.com/rodedd/To-Do-App',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365751/portfolio/projects/todo_uzgg19.png',
  },
  {
    name: 'React MoviesDB',
    description: 'This project was built using The Movie DB API https://www.themoviedb.org/',
    tags: ['React', 'CSS', 'Session Storage API'],
    liveUrl: 'https://dreamy-ramanujan-ea82d7.netlify.app/',
    githubUrl: 'https://github.com/rodedd/React-moviesdb',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365754/portfolio/projects/moviesdb_wk0agr.png',
  },
  {
    name: 'Batatabit Landing Page',
    description: 'This is a landing page from an e-commerce, it was made using Mobile First Responsive Design.',
    tags: ['HTML', 'CSS'],
    liveUrl: 'https://rodedd.github.io/batatabit-landing-page/',
    githubUrl: 'https://github.com/rodedd/batatabit-landing-page',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365752/portfolio/projects/batatabit_czuu7d.png',
  },
  {
    name: 'Animal Crossing Landing Page',
    description: 'This is a landing page from an e-commerce, it was made using Mobile First Responsive Design.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    liveUrl: 'https://rodedd.github.io/animalcrossing_bootstrap/',
    githubUrl: 'https://github.com/rodedd/animalcrossing_bootstrap',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365753/portfolio/projects/aclanding_ntrbgz.png',
  },
]

const Projects = () => {
  return (
    <Container>
      <div className='mt-10 mb-20 w-full'>
        <h1 className='title'>Projects</h1>
        <h2 className='subtitle'>A selection of stuff I've built.</h2>
      </div>

      <div>
        {projects.map((project, index) => (
            <Project
              key={project.name}
              project={project}
              index={index}
            />
          ))}
      </div>
    </Container>
  );
};

export { Projects };
