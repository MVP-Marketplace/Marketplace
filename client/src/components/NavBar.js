import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nb-wrapper'>
      <Navbar expand='lg' className='nb-container'>
        <Navbar.Brand href='#home'> MVP </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Product</Nav.Link>
            <Nav.Link href='#link'>Pricing</Nav.Link>
            <Nav.Link href='#link'>Contact</Nav.Link>
          </Nav>
          <Nav.Link className='nb-login' href='#link'>
            Login
          </Nav.Link>
          <Button variant='primary' className='nb-button'>
            {' '}
            Become a member{' '}
          </Button>{' '}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
