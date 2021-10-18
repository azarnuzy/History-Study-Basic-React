import React, { Component } from 'react';
import Formulir from './Formulir';
import NavbarComponent from './NavbarComponent';
import Tabel from './Table';

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [],
      nama: '',
      deskripsi: '',
      harga: 0,
      id: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      foods: [
        ...this.state.foods,
        {
          id: this.state.foods.length + 1,
          nama: this.state.nama,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga,
        },
      ],
    });

    this.setState({
      nama: '',
      deskripsi: '',
      harga: 0,
      id: '',
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container">
          <Tabel foods={this.state.foods} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
