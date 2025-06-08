
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import './theme.css';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Statistics />
      <Footer />
    </>
  );
};

export default App;
