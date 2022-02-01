import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Container = ({ children }) => {
  return (
    <div className='flex flex-col mx-auto px-8 sm:px-16 py-2 min-h-screen max-w-7xl bg-babyPowder mix-blend-darken overflow-hidden xl:overflow-visible'>
      <Header />
      <main className='appear'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { Container };
