import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row
} from 'react-bootstrap';
import './App.scss';

const Home = props => {

  return (
    <>
      <Container className="intro-text">
        <p className="title">James Armbrust dot dev</p>
        <p className="message-text">I am currently revamping the site, will be up again shorty.</p>
      </Container >
    </>
  );
}

export default Home;
