import React from 'react';
import { Container } from '../layouts/Container';

const About = () => {
  return (
    <Container>
      <div className='my-10 w-full'>
        <h1 className='title'>About me</h1>
        <h2 className='subtitle'>Who is Eduardo?</h2>
      </div>
      
      <div className='w-full text-lg sm:flex'>
        <div className='min-w-[180px] sm:w-1/4'>
          <img className='rounded-full w-60 sm:w-full max-w-xs mb-10 mx-auto' src="https://res.cloudinary.com/rodedd/image/upload/v1642636411/portfolio/Perfil334_dslkod.jpg" alt="Eduardo Prado" />
        </div>
        <div className='paragraph space-y-3 sm:w-3/4 sm:ml-8'>
          <p>
            Hi! My name is Eduardo and I'm from Mexico. I am a Computer Science graduate who specializes in Front End web development. Currently I'm learning and working on projects with React with a focus on website optimization and accessibility.
          </p>
          <p>
            Shortly after graduating from university, I continued my learning through specialized online courses on platforms like Platzi. In fact, I adopted in my life their motto of "never stop learning".
          </p>
          <p>
            Since I was a child I found myself interested in everything related to technology so now working in the tech field makes me really happy and thrilled to live in this digital age of technological changes. My purpose is to develop applications that changes people's lives for the better.
          </p>
        </div>
      </div>

      <div className='text-lg space-y-3 mt-10'>
        <h3 className='subtitle text-xl'>Contact</h3>
        <p className='paragraph'>
          If you think I can help you in something with your career, or if you consider that my skills and experience can be useful to you, please contact me via the following:
        </p> 
        
        <div className='text-prussianBlue space-y-3'>
          <div className='flex items-center space-x-2'>
            <svg className='w-7 fill-prussianBlue' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30"><path d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z"></path></svg>
            <span className='font-bold'>Email: <a className='underline underline-offset-8 decoration-ultraRed decoration-2 text-ultraRed' href='mailto:96.rodedd@gmail.com' target='_blank' rel='noreferrer'>@eduardoprado</a></span>
          </div>
          <div className='flex items-center space-x-2'>
            <svg className='w-7 fill-prussianBlue' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
            <span className='font-bold'>LinkedIn: <a className='underline underline-offset-8 decoration-ultraRed decoration-2 text-ultraRed' href='https://www.linkedin.com/in/eduardo-rodriguez-prado/' target='_blank' rel='noreferrer'>@eduardoprado</a></span>
          </div>
          <div className='flex items-center space-x-2'>
            <svg className='w-7 fill-prussianBlue' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
              <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
            </svg>
            <span className='font-bold'>Twitter: <a className='underline underline-offset-8 decoration-ultraRed decoration-2 text-ultraRed' href='/' target='_blank' rel='noreferrer'>@eduardoprado</a></span>
          </div>
          <div className='flex items-center space-x-2'>
            <svg className='w-7 fill-prussianBlue' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
            <span className='font-bold'>GitHub: <a className='underline underline-offset-8 decoration-ultraRed decoration-2 text-ultraRed' href='https://github.com/rodedd' target='_blank' rel='noreferrer'>@eduardoprado</a></span>
            
          </div>
        </div>
      </div>
    </Container>
  );
};

export { About };
