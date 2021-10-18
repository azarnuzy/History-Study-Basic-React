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

    if (this.state.id !== '') {
      const unChoosenFood = this.state.foods
        .filter((food) => food.id !== this.state.id)
        .map((filterfood) => {
          console.log(filterfood);
          return filterfood;
        });

      this.setState({
        foods: [
          ...unChoosenFood,
          {
            id: this.state.foods.length,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
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
    }

    this.setState({
      nama: '',
      deskripsi: '',
      harga: 0,
      id: '',
    });
  };

  editData = (id) => {
    const choosenFood = this.state.foods
      .filter((food) => food.id === id)
      .map((filterfood) => {
        return filterfood;
      });

    this.setState({
      nama: choosenFood[0].nama,
      deskripsi: choosenFood[0].deskripsi,
      harga: choosenFood[0].harga,
      id: choosenFood[0].id,
    });
  };

  render() {
    console.log(this.state.id);
    return (
      <div>
        <NavbarComponent />
        <div className="container">
          <Tabel foods={this.state.foods} editData={this.editData} />
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
