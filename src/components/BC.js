import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import QuintillizasN10 from './Imagenes/Quintillizas/QuintillizasN10.webp';
import QuintillizasN11 from './Imagenes/Quintillizas/QuintillizasN11.webp';
import QuintillizasN12 from './Imagenes/Quintillizas/QuintillizasN12.webp';
import aoharuride_01 from './Imagenes/AohaRide/aoharuride_01.jpg';
import aoharuride_02 from './Imagenes/AohaRide/aoharuride_02.jpg';
import aoharuride_03 from './Imagenes/AohaRide/aoharuride_03.jpg';
import aoharuride_04 from './Imagenes/AohaRide/aoharuride_04.jpg';


export default function BC() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src = {QuintillizasN10}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={QuintillizasN11}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={QuintillizasN12}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

