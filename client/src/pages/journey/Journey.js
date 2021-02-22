import React from 'react';
import './Journey.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer.js';
import { Card, Container } from 'react-bootstrap';
import Polygon from './assets/Polygon.png';
import Union from './assets/Union.png';
import User from './assets/user.png';
import Briefcase from './assets/briefcase.png';
const Journey = () => {
  return (
    <>
      <div className='background'>
        <Container className='wrapper'>
          <h1 className='title-wrapper'>
            To begin, <br /> tell us which journey reflects you
          </h1>
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
                  You are a coder ,UXUI product designer, a builder of magic on
                  the screen
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
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Journey;
