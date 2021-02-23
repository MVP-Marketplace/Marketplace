import React from 'react';
import './Expectations.css';
import { Card, Image, Button } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Background from './assets/background.png';
import User from '../journey/assets/user.png';

const BuilderExpectations = () => {
  return (
    <div>
      <div className='wrapper'>
        <Image src={Background} alt='background' className='background' />
        <Card className='title-wrapper'>
          <Card.Title className='title'>You are a builder!</Card.Title>
        </Card>
        <Card className='role-wrapper d-flex flex-row'>
          <Card.Header className='card-image-wrapper'>
            <Card.Img
              src={User}
              alt='polygon'
              id='user-icon'
              className='m-auto'
            />
          </Card.Header>
          <Card.Body className='m-auto'>
            <Card.Title className='card-title'> Builder</Card.Title>
            <Card.Text className='card-text'>
              You are a coder ,UXUI product designer, a builder of magic on the
              screen
            </Card.Text>
          </Card.Body>
        </Card>
        <div className='button-wrapper'>
          <Button className='mr-0'>Get Started</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuilderExpectations;
