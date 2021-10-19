import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import ListCategories from './ListCategories';
import { Col, Row, Container } from 'react-bootstrap';
import Hasil from './Hasil';
import Menus from './Menus';
import { API_URL } from './utils/constant';
import axios from 'axios';
import './CSS/style.css';

export class ReactAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      choosenCategory: 'Minuman',
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + '/products?category.nama=' + this.state.choosenCategory)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeCategory = (value) => {
    this.setState({
      choosenCategory: value,
      menus: [],
    });

    axios
      .get(API_URL + '/products?category.nama=' + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, choosenCategory } = this.state;
    console.log(this.state.menus);
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories
                changeCategory={this.changeCategory}
                choosenCategory={choosenCategory}
              />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                  <hr />
                </h4>
                <Row>
                  {menus &&
                    menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
                </Row>
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
