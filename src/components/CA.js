import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import QuintillizasN10 from "./Imagenes/Quintillizas/QuintillizasN10.webp";
import QuintillizasN11 from "./Imagenes/Quintillizas/QuintillizasN11.webp";
import QuintillizasN12 from "./Imagenes/Quintillizas/QuintillizasN12.webp";
import Carousel from "react-bootstrap/Carousel";
import aoharuride_01 from "./Imagenes/AohaRide/aoharuride_01.jpg";
import aoharuride_02 from "./Imagenes/AohaRide/aoharuride_02.jpg";
import aoharuride_03 from "./Imagenes/AohaRide/aoharuride_03.jpg";
import aoharuride_04 from "./Imagenes/AohaRide/aoharuride_04.jpg";
import Button from "react-bootstrap/Button";
import shop from "./Imagenes/Iconos/shop.png";
import info from "./Imagenes/Iconos/info.png";

export default function CA() {
  return (
    <CardGroup>
      <Card>
        <Card.Img />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={QuintillizasN10}
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
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="white" href="https://www.instagram.com/animeweebstore.cl/">
            <img src= {shop} alt="shop" style={{ width: 40, height: 40 }} />
          </Button>
          <Button variant="white" href="https://www.instagram.com/p/Ceq8VBXLNYS/">
            <img src= {info}  alt="info" style={{ width: 40, height: 40 }} />
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={QuintillizasN10}
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
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="white" href="https://www.instagram.com/animeweebstore.cl/">
            <img src= {shop} alt="shop" style={{ width: 40, height: 40 }} />
          </Button>
          <Button variant="white" href="https://www.instagram.com/p/Ceq8VBXLNYS/">
            <img src= {info}  alt="info" style={{ width: 40, height: 40 }} />
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={QuintillizasN10}
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
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="white" href="https://www.instagram.com/animeweebstore.cl/">
            <img src= {shop} alt="shop" style={{ width: 40, height: 40 }} />
          </Button>
          <Button variant="white" href="https://www.instagram.com/p/Ceq8VBXLNYS/">
            <img src= {info}  alt="info" style={{ width: 40, height: 40 }} />
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
