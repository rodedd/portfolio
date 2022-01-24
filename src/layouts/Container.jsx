import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Container = ({ children }) => {
  return (
    <div className='px-4 py-2 min-h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { Container };
