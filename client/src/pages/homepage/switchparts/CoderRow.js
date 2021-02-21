import React from 'react';
import { Figure, Row } from 'react-bootstrap';
import './Switch.css';

const CoderRow = () => {
  return (
    <Row className='hm-coder-row'>
      <Figure className='hm-desc'>
        <div className='hm-desc-row-image'></div>
        <Figure.Caption className='hm-desc-row-caption'>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      <Figure className='hm-desc'>
        <div className='hm-desc-row-image'></div>
        <Figure.Caption className='hm-desc-row-caption'>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
      <Figure className='hm-desc'>
        <div className='hm-desc-row-image'></div>
        <Figure.Caption className='hm-desc-row-caption'>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
    </Row>
  );
};

export default CoderRow;
