import React from 'react';
import './Header.css';

const Header = ({ onMenuClick, isMenuOpen }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <button className="header__menu-btn" onClick={onMenuClick}>
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor"/>
              </svg>
            )}
          </button>
          <div className="header__logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0ZM16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4Z" fill="currentColor"/>
              <path d="M16 8C11.582 8 8 11.582 8 16C8 20.418 11.582 24 16 24C20.418 24 24 20.418 24 16C24 11.582 20.418 8 16 8ZM16 12C18.209 12 20 13.791 20 16C20 18.209 18.209 20 16 20C13.791 20 12 18.209 12 16C12 13.791 13.791 12 16 12Z" fill="currentColor"/>
            </svg>
            <span>QodeQ</span>
          </div>
        </div>
        <div className="header__right">
          <button className="header__login-btn">Log in</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 