import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Container = ({ children, grid }) => {
  return (
    <div className={`flex flex-col items-center px-4 py-2 m-auto min-h-screen max-w-[1280px] bg-babyPowder mix-blend-darken overflow-hidden xl:overflow-visible ${grid ? 'grid grid-cols-1 content-between' : ''}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { Container };
