import React from 'react';
import graphic from './assets/hands.png';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='body'>
      <div className='blue-cover'>
        <div className='content-wrapper'>
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
            <p className='email'>mvp@makeitmvp.com</p>
          </div>
          <img src={graphic} className='graphic' />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
