import React from 'react';
import './Expectations.css';
import { Card, Image, Button } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Background from './assets/background.png';
import Briefcase from '../journey/assets/briefcase.png';

const FounderExpectations = () => {
  return (
    <div>
      <div>
        <div className='wrapper'>
          <Image src={Background} alt='background' className='background' />
          <Card className='title-wrapper'>
            <Card.Title className='title'>You are a founder!</Card.Title>
          </Card>
          <Card className='role-wrapper d-flex flex-row'>
            <Card.Header className='card-image-wrapper'>
              <Card.Img
                src={Briefcase}
                alt='polygon'
                id='user-icon'
                className='m-auto'
              />
            </Card.Header>
            <Card.Body className='m-auto'>
              <Card.Title className='card-title'> Founder</Card.Title>
              <Card.Text className='card-text'>
                You maybe have a tech background or you have an idea that just
                came to you in shower
              </Card.Text>
            </Card.Body>
          </Card>
          <div className='button-wrapper'>
            <Button className='mr-0'>Get Started</Button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FounderExpectations;
