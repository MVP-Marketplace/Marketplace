import React from 'react';
import './Journey.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer.js';
import { Card, Image } from 'react-bootstrap';
import Union from './assets/Union.png';
import User from './assets/user.png';
import Briefcase from './assets/briefcase.png';
import Background from './assets/background.png';
const Journey = () => {
  return (
    <div className='wrapper'>
      <Image src={Background} alt='background' className='background' />
      <Card className='title-wrapper'>
        <Card.Title className='title'>
          To begin, <br /> tell us which journey reflects you
        </Card.Title>
      </Card>
      <Link>
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
          <Card.Img src={Union} alt='arrow' id='arrow' />
        </Card>
      </Link>
      <Link>
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
            <Card.Title className='card-title'>Founder</Card.Title>
            <Card.Text className='card-text'>
              You maybe have a tech background or you have an idea that just
              came to you in shower
            </Card.Text>
          </Card.Body>
          <Card.Img src={Union} alt='arrow' id='arrow' />
        </Card>
      </Link>

      <Footer />
    </div>
  );
};

export default Journey;
