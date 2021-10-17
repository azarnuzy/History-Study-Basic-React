import React, { Component } from 'react';
import Formulir from './Formulir';
import NavbarComponent from './NavbarComponent';
import Tabel from './Table';

export default class Crud extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container">
          <Tabel />
          <Formulir />
        </div>
      </div>
    );
  }
}
