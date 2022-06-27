import React from 'react';

import Logo from '../../assets/Logo.svg';

import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <navbar className="header__navbar">
        <img src={Logo} alt="Logo" />
        <div className="buttons-container">
          <button className='header__btn' type='button'>
            Users
          </button>
          <button className='header__btn' type='button'>
            Sign up
          </button>
        </div>
      </navbar>
      <div className="header__content">
        <h2 className='header__title'>
          Test assignment for front-end developer
        </h2>
        <p className="header__text">
          What defines a good front-end developer is one that has skilled knowledge of HTML,
          CSS, JS with a vast understanding of User design thinking as they'll be building web 
          interfaces with accessibility in mind. They should also be excited to learn,
          as the world of Front-End Development keeps evolving.
        </p>
        <button className='header__btn' type='button'>
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;