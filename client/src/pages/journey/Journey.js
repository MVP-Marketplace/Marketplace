import React from 'react';
import './Journey.css';
import { Link } from 'react-router-dom';

const Who = () => {
  return (
    <div className='wrapper'>
      <div className='title-wrapper'>
        <h1>
          {' '}
          To begin,
          <br></br> tell us which journey reflects you
        </h1>
      </div>
      <div>
        <Link>
          <div className='role-wrapper'>
            <h2>Builder</h2>
            <p>You are a developer or UX/UI product designer.</p>
          </div>
        </Link>
        <Link>
          <div className='role-wrapper'>
            <h2>Founder</h2>
            <p>
              You maybe have a tech background or you have an idea that just
              came to you in shower
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Who;
