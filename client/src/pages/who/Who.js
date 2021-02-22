import React from 'react';
import './Who.css';
import { Link } from 'react-router-dom';

const Who = () => {
  return (
    <div>
      <Link>
        <div>
          <h2>Builder</h2>
          <p>You are a developer or UX/UI product designer.</p>
        </div>
      </Link>
      <Link>
        <div>
          <h2>Founder</h2>
          <p>
            You maybe have a tech background or you have an idea that just came
            to you in shower
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Who;
