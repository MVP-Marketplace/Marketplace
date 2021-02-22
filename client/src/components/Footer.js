import React from 'react';
import './Footer.css';
import FacebookLogo from './assets/facebook.png';
import InstagramLogo from './assets/instagram.png';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='full-wrapper'>
      <Container className='d-flex flex-row footer'>
        <Card className='right-wrapper d-flex flex-row'>
          <Card.Body className='d-flex flex-column social-wrapper'>
            <Card.Text className='follow'> Follow Us</Card.Text>
            <Card.Body className='d-flex flex-row'>
              <Card.Img src={FacebookLogo} alt='facebook logo' id='fb-logo' />
              <Card.Img
                src={InstagramLogo}
                alt='instagram logo'
                id='insta-logo'
              />
            </Card.Body>
          </Card.Body>
          <Card.Body className='d-flex flex-row mvp-wrapper'>
            <Card.Img
              src='https://picsum.photos/200'
              alt='Make It MVP Logo'
              id='logo'
            />
            <Card.Text className='mvp'>Make It MVP</Card.Text>
          </Card.Body>
          <Card.Body className='description'>
            <Card.Text className='description-wrapper'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='left-wrapper d-flex flex-row'>
          <Link className='link'>Contact Us</Link>
          <Link className='link'>Partners</Link>
          <Link className='link'>FAQs</Link>
        </Card>
      </Container>
      <h5>Copyright &#169; 2021 MakeItMVP. All rights reserved.</h5>
    </div>
  );
};

export default Footer;
