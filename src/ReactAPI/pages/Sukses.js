import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Success extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <Image
          src={process.env.PUBLIC_URL + 'assets/images/success.png'}
          width="500"
        />
        <h2>Sukses Pesan</h2>
        <p>Terima Kasih Sudah Memesan!</p>
        <Button variant="primary" as={Link} to={'/'}>
          Kembali
        </Button>
      </div>
    );
  }
}
