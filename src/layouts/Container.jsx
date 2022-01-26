import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Container = ({ children, grid }) => {
  return (
    <div className={`px-4 py-2 min-h-screen bg-babyPowder mix-blend-multiply overflow-hidden ${grid ? 'grid grid-cols-1 content-between' : ''}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { Container };
