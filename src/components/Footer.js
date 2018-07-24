import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col
} from 'reactstrap';
import '../App.css';

class Footer extends Component {
  render() {
    return (
        <footer className="App-footer">
          <Container>
          <Row >
              <Col md={4}>
              <ul>
                <li>
                  <Link to='/contact'>Contacto</Link>
                </li>
              </ul>
              </Col>
              <Col md={4}>
              </Col>
              <Col md={4}>
              </Col>
              <Col md={4}>
              </Col>
            </Row>
          </Container>
          
        </footer>
    );
  }
}

export default Footer;
