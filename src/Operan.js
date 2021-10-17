import React, { Component } from 'react';

export default class Operan extends Component {
  render() {
    return (
      <div>
        <h2>Operan State yang menjadi Props : {this.props.makanan}</h2>
      </div>
    );
  }
}
