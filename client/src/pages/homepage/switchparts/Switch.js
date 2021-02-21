import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './Switch.css';

const Switch = () => {
  return (
    <div className='hm-switch-wrapper'>
      <h3> How it Works</h3>
      <ButtonGroup type='checkbox' className='hm-bg'>
        <Button className='hm-bg-default coder'> Coder/UXUI </Button>
        <Button className='hm-bg-default idea'> IDEA </Button>
      </ButtonGroup>
    </div>
  );
};

export default Switch;
