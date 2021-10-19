import React, { Component } from 'react';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';

export default class Hasil extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={2} mt="2">
        <h4>
          <strong>Hasil</strong>
          <hr />
        </h4>
        {keranjangs.length !== 0 && (
          <ListGroup variant="flush">
            {keranjangs.map((menuKeranjang) => (
              <ListGroup.Item key={menuKeranjang.id}>
                <Row>
                  <Col xs={2}>
                    <h4>
                      <Badge pill variant="success">
                        {menuKeranjang.jumlah}
                      </Badge>
                    </h4>
                  </Col>
                  <Col>
                    <h5>{menuKeranjang.product.nama}</h5>
                    <p>Rp. {numberWithCommas(menuKeranjang.product.harga)} </p>
                  </Col>
                  <Col>
                    <strong>
                      Rp. {numberWithCommas(menuKeranjang.total_harga)}
                    </strong>{' '}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    );
  }
}
