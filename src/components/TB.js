import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import QuintillizasN10 from './Imagenes/Quintillizas/QuintillizasN10.webp';

export default function TB() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Acerca de nosotros</h2>
      <hr className="my-4" />
      <p className="lead">Anime Weeb Store es una tienda que trae los mejores productos por encargo desde Japon. Traemos figuras Originales y alternativas a eleccion de nuestros clientes. </p>
    </div>
    <div className="col-md-5">
      <img src= {QuintillizasN10} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveaspectratio="xMidYMid slice" focusable="false" />
    </div>
    <p><a className="btn btn-primary" href="https://www.instagram.com/p/Ceq8VBXLNYS/">Visita La Rifa »</a></p>
  </div>
  <hr className="featurette-divider" />
</div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Acerca de nosotros</h2>
      <hr className="my-4" />
      <p className="lead">Anime Weeb Store es una tienda que trae los mejores productos por encargo desde Japon. Traemos figuras Originales y alternativas a eleccion de nuestros clientes. </p>
    </div>
    <div className="col-md-5">
      <img src= {QuintillizasN10} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveaspectratio="xMidYMid slice" focusable="false" />
    </div>
    <p><a className="btn btn-primary" href="https://www.instagram.com/p/Ceq8VBXLNYS/">Visita La Rifa »</a></p>
  </div>
  <hr className="featurette-divider" />
</div>
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Acerca de nosotros</h2>
      <hr className="my-4" />
      <p className="lead">Anime Weeb Store es una tienda que trae los mejores productos por encargo desde Japon. Traemos figuras Originales y alternativas a eleccion de nuestros clientes. </p>
    </div>
    <div className="col-md-5">
      <img src= {QuintillizasN10} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveaspectratio="xMidYMid slice" focusable="false" />
    </div>
    <p><a className="btn btn-primary" href="https://www.instagram.com/p/Ceq8VBXLNYS/">Visita La Rifa »</a></p>
  </div>
  <hr className="featurette-divider" />
</div>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        
      </Tab>
    </Tabs>
  );
}
