import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Chat from './components/Chat/Chat';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <Header onMenuClick={toggleMenu} isMenuOpen={isMenuOpen} />
      <SideMenu isOpen={isMenuOpen} />
      <Chat />
      <main className="main">
        {/* Здесь будет основной контент */}
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
