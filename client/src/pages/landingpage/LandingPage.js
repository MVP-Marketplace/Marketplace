import React from 'react';
import graphic from './assets/hands.png';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='body'>
      <div className='blue-cover'>
        <div className='text-container'>
          <p className='coming-soon'>Coming Soon</p>
          <h1 className='header'>
            Make It <span className='mvp'>MVP</span>
          </h1>
          <h3 className='description'>
            A place where ideas and bootcamp grads unite to create meaningful
            viable products
          </h3>
          <p className='more-information'>For more information:</p>
          <a href='mailto:mvp@makeitmvp.com' className='email'>
            mvp@makeitmvp.com
          </a>
        </div>
        <img src={graphic} className='graphic' />
      </div>
    </div>
  );
};

export default LandingPage;
