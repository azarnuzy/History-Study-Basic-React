import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import ListCategories from './ListCategories';
import './CSS/style.css';
import { Col, Row, Container } from 'react-bootstrap';
import Hasil from './Hasil';

export class ReactAPI extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                  <hr />
                </h4>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ReactAPI;
