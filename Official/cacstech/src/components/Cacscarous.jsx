import React from 'react';
import './cacscarous.module.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cacscarous() {
  const carstyle = {
    width: '100%',
    height: '400px',
    maxWidth: '1000px', // Maximum width for large screens
    maxHeight: '400px', // Maximum height
  };

  return (
    <div className='carsitem'>
      <Carousel>
        <Carousel.Item interval={2000} style={carstyle}>
          <img
            src="https://img.freepik.com/premium-photo/quotvibrant-navratri-garba-night-gujaratquot_1280275-331632.jpg"
            alt="First slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption>
            <h3>CACS</h3>
            <p>Empowering Innovation and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} style={carstyle}>
          <img
            src="https://img.freepik.com/premium-photo/quotvibrant-navratri-garba-night-gujaratquot_1280275-331632.jpg"
            alt="Second slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption>
          <h3>CACS</h3>
          <p>Empowering Innovation and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} style={carstyle}>
          <img
            src="https://img.freepik.com/premium-photo/quotvibrant-navratri-garba-night-gujaratquot_1280275-331632.jpg"
            alt="Third slide"
            className="d-block w-100"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption>
          <h3>CACS</h3>
          <p>Empowering Innovation and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Cacscarous;
