import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext.js';
import { useHistory, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import LoginImage from './assets/pana.png';
import GoogleLogo from './assets/google-logo.png';
import './Login.css';

const Login = () => {
  const { setCurrentUser, setLoading } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const history = useHistory();
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/profile');
    } catch (error) {
      console.log('You logged in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid='false' className='login-container'>
      <Row>
        <Col>
          <p className='welcome-back'>Welcome back</p>
          <p className='login-heading'>Login to your account</p>
          <Form className='login-form' onSubmit={handleLogin}>
            <Form.Group className='username-group'>
              <Form.Label className='username-label'>Email</Form.Label>
              <Form.Control
                id='email'
                type='text'
                name='email'
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className='password-label'>Password</Form.Label>
              <Form.Control
                id='password'
                type='password'
                name='password'
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='login-button-div'>
              <Button className='login-button' block type='submit'>
                Log In
              </Button>

              <Button className='login-with-google-button' block type='submit'>
                <img src={GoogleLogo} className='google-logo' />
                Or sign-in with Google
              </Button>
            </Form.Group>
          </Form>

          <Link className='make-account-link' to='/sign-up'>
            {' '}
            Don't have an account?
          </Link>
        </Col>

        <Col className='login-image-container'>
          <Image src={LoginImage} fluid className='login-image' />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
