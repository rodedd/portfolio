import React from 'react';

const SkillsGrid = ({ skills }) => {
  return (
    <div className='w-full grid grid-cols-3 gap-5 place-items-start mb-10 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
      {skills.map(skill => (
        <div key={skill.name} className='flex flex-col justify-center items-center w-4/5'>
          <skill.icon />
          <span className='text-lg text-prussianBlue font-roboto mt-4'>{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export { SkillsGrid };
