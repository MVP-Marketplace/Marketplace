import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='footer-wrapper'>
        <div className='right-footer-wrapper'>
          <div className='social-wrapper'>
            <h4>Follow Us</h4>
            <div className='social-images'>
              <img src='../facebook.png' alt='facebook-logo' />
              <img src='../instagram.png' alt='instagem-logo' />
            </div>
          </div>
          <div className='logo-wrapper'>
            <img
              src='http://placehold.it/20x20undefined1'
              className='logo'
              alt='make-it-logo'
            />
            <h4> Make It MVP</h4>
          </div>
          <div className='description-wrapper'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
        <div className='left-wrapper'>
          <div>
            <Link>Contact Us</Link>
          </div>
          <div>
            <Link>Partners</Link>
          </div>
          <div>
            <Link>FAQs</Link>
          </div>
        </div>
      </div>
      <h5>Copyright &#169; 2021 MakeItMVP. All rights reserved.</h5>
    </div>
  );
};

export default Footer;
