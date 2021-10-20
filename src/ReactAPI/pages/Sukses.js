import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/constant';

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + '/keranjangs')
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function (item) {
          return axios
            .delete(API_URL + '/keranjangs/' + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
