import React from 'react';
import './Home.css';
import {
  Container,
  Jumbotron,
  Card,
  Row,
  Image,
  Button,
  Col,
} from 'react-bootstrap';
import Hands from './assets/hands.svg';
import Switch from './switchparts/Switch';
import CoderRow from './switchparts/CoderRow';
// import SecondBlock from './blocks/SecondBlock';

const Home = () => {
  return (
    <Container className='hm-wrapper' fluid>
      {/* <div className="hm-wrapper"> */}
      <Jumbotron className='hm-welcome-container'>
        {/* <Container className='hm-wrapper'></Container> */}
        <Col className='hm-welcome-top'>
          <div className='hm-text-card'>
            <Card.Title className='hm-title'>
              {' '}
              Make it <span className='hm-MVP-word'> MVP </span>
            </Card.Title>
            <Card.Text className='hm-subtitle'>
              A place where ideas and bootcamp grads unite to create meaningful
              viable products.
            </Card.Text>
            <Button className='hm-signup'> Sign Up </Button>
          </div>
          <Image className='hm-hands-icon' src={Hands} />
        </Col>
      </Jumbotron>
      <Row className='hm-how-it-works'>
        <Switch />
      </Row>
      <br /> <br />
      <Row className='hm-how-it-works'>
        <CoderRow />
      </Row>
    </Container>
  );
};

export default Home;
