import React from 'react';
import { Helmet } from 'react-helmet';
import { Project } from '../components/Project';
import { Container } from '../layouts/Container';

const projects = [
  {
    name: 'React Movie',
    description: 'A web app where you can find information about movies including their plot, director, cast, etc. It fetches the data from The Movie DB API https://www.themoviedb.org/',
    tags: ['React', 'CSS', 'Styled Components', 'Web APIs'],
    liveUrl: 'https://dreamy-ramanujan-ea82d7.netlify.app/',
    githubUrl: 'https://github.com/rodedd/React-moviesdb',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365754/portfolio/projects/moviesdb_wk0agr.png',
  },
  {
    name: '100tifico',
    description: '100tifico is a Single Page Application (SPA) that shows information from Rick & Morty\'s characters using the Rick & Morty API https://rickandmortyapi.com/',
    tags: ['JavaScript', 'CSS', 'HTML', 'Webpack', 'Babel', 'Web APIs'],
    liveUrl: 'https://rodedd.github.io/spa-rickandmorty/',
    githubUrl: 'https://github.com/rodedd/spa-rickandmorty',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365753/portfolio/projects/100tifico_dszbud.png',
  },
  {
    name: 'To-Do App',
    description: 'To-Do App is a classic to-do list built with React. The data is stored and saved across browser sessions using the localStorage API.',
    tags: ['React', 'CSS', 'Web APIs'],
    liveUrl: 'https://to-do-app-bo6kt3g55-rodedd.vercel.app/',
    githubUrl: 'https://github.com/rodedd/To-Do-App',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365751/portfolio/projects/todo_uzgg19.png',
  },
  {
    name: 'Batatabit',
    description: 'Batatabit is a landing page for an online platform. It was built using Mobile First responsive design.',
    tags: ['HTML', 'CSS'],
    liveUrl: 'https://rodedd.github.io/batatabit-landing-page/',
    githubUrl: 'https://github.com/rodedd/batatabit-landing-page',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365752/portfolio/projects/batatabit_czuu7d.png',
  },
  {
    name: 'Animal Crossing Homepage',
    description: 'This is a clone of the official Animal Crossing page using Bootstrap as CSS framework.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    liveUrl: 'https://rodedd.github.io/animalcrossing_bootstrap/',
    githubUrl: 'https://github.com/rodedd/animalcrossing_bootstrap',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365753/portfolio/projects/aclanding_ntrbgz.png',
  },
  {
    name: 'Animationland',
    description: 'Animationland is a simple game that uses CSS animations and was inspired by Alice in Wonderland movie.',
    tags: ['CSS', 'HTML'],
    liveUrl: 'https://rodedd.github.io/animationland-game/',
    githubUrl: 'https://github.com/rodedd/animationland-game',
    image: 'https://res.cloudinary.com/rodedd/image/upload/v1644365752/portfolio/projects/animationland_a4fixz.png',
  },
]

const Projects = () => {
  return (
    <Container>
      <Helmet>
        <title>Projects - Eduardo Prado</title>
      </Helmet>
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
              length={projects.length}
            />
          ))}
      </div>
    </Container>
  );
};

export { Projects };
