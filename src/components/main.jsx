import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="container">
      <Row>
        <Col xs={12} md={6} className="order-md-first d-flex mt-10 flex-column align-items-center">
          <h1 className="font-weight-bold mt-10 mb-120 text-center pt-10 text-md-left">Clothes That Get YOU Noticed</h1>
          {/* <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home_mobile_img img-fluid"
            style={{ width: '206px' }}
          /> */}
          <p className="font-family-roboto font-size-14 line-height-28 text-center text-md-left">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the season's new and exciting
            fashion in your own way.
          </p>
          <a href="/products">
            <NavLink to='/product'><Button className="shop_now_button">Shop Now</Button></NavLink>
          </a>
        </Col>
        <Col xs={12} md={6} className="order-md-last d-flex align-items-center justify-content-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home_desktop_img img-fluid"
            style={{ width: '50%', maxWidth: '450px' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
