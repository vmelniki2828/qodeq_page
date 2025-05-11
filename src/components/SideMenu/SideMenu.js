import React from 'react';
import './SideMenu.css';

const SideMenu = ({ isOpen }) => {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <nav className="side-menu__nav">
        <ul className="side-menu__list">
          <li className="side-menu__item">
            <a href="#" className="side-menu__link">Главная</a>
          </li>
          <li className="side-menu__item">
            <a href="#" className="side-menu__link">Продукты</a>
          </li>
          <li className="side-menu__item">
            <a href="#" className="side-menu__link">Решения</a>
          </li>
          <li className="side-menu__item">
            <a href="#" className="side-menu__link">Разработчикам</a>
          </li>
          <li className="side-menu__item">
            <a href="#" className="side-menu__link">Цены</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu; 