import React from 'react';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Hero from '../Hero/Hero';
import './Landing.css';

const Landing = () => {
  return (
    <div className="app">
      <Header />
      <SideMenu />
      <main className="main">
        <Hero />
      </main>
    </div>
  );
};

export default Landing; 