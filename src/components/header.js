import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import raysImage from '../assets/Rays.png';
import logoImage from '../assets/Logo 1.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-background">
      <div className="header-nav">
        <p>PROJECT</p>
        <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`header-list ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/Home" onClick={toggleMenu}>Главная</Link></li>
            <li><Link to="/About" onClick={toggleMenu}>О нас</Link></li>
            <li><Link to="/find" onClick={toggleMenu}>Вакансии</Link></li>
            <li><Link to="/resume" onClick={toggleMenu}>Ваше Резюме</Link></li>
            <li><Link to="/contacts" onClick={toggleMenu}>Контакты</Link></li>
          </ul>
        </nav>
      </div>
      <img src={raysImage} id="rays" alt="Rays Background" />
      <div className="header-content">
        <div className="logo-container">
          <img src={logoImage} id="svg-logo" alt="Logo" />
        </div>
        <h1>Head Hunter<br />By Kair</h1>
        <h2>Найдите работу себе по душе<br />Удачи в поисках.</h2>
      </div>
    </header>
  );
};

export default Header;
