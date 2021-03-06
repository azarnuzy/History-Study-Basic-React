import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';
import { API_URL } from '../utils/constant';

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios.post(API_URL + '/pesanans', pesanan).then((res) => {
      this.props.history.push('/sukses');
    });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce((result, item) => {
      return result + item.total_harga;
    }, 0);
    return (
      <>
        {/* Web */}
        <div className="fixed-bottom d-none d-md-block">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <h4>
                Total Harga :{' '}
                <strong className="float-right mx-2">
                  Rp. {numberWithCommas(totalBayar)}
                </strong>
              </h4>
              <div className="d-grid gap-2 mb-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => this.submitTotalBayar(totalBayar)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> Bayar
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        {/* Mobile */}
        <div className="d-sm-block d-md-none">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <h4>
                Total Harga :{' '}
                <strong className="float-right mx-2">
                  Rp. {numberWithCommas(totalBayar)}
                </strong>
              </h4>
              <div className="d-grid gap-2 mb-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => this.submitTotalBayar(totalBayar)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> Bayar
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
