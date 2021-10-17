import React, { Component } from 'react';
import SubLifeCycle from './3subLifeCycle';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: 'Bakso',
      data: {},
      tampilHalamanSub: false,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  ubahMakanan = (maknan_baru) => {
    this.setState({
      makanan: maknan_baru,
    });
  };

  render() {
    console.log(this.state.data);
    console.log(this.state.tampilHalamanSub);
    return (
      <div>
        <h2>{this.state.makanan} </h2>
        {this.state.tampilHalamanSub && (
          <SubLifeCycle ubahMakanan={(value) => this.ubahMakanan(value)} />
        )}
        <button
          onClick={() =>
            this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })
          }
        >
          Ubah
        </button>
      </div>
    );
  }
}
