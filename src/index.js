import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About } from './pages/about';
import { Skills } from './pages/skills';
import { Home } from './pages/home';
import { Projects } from './pages/projects';
import { ScrollToTop } from './utils/ScrollToTop';

import './styles/globals.css';

ReactDOM.render(
  <>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
