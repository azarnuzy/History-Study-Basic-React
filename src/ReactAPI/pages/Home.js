import React, { Component } from 'react';
import ListCategories from '../components/ListCategories';
import { Col, Row, Container } from 'react-bootstrap';
import Hasil from '../components/Hasil';
import Menus from '../components/Menus';
import { API_URL } from '../utils/constant';
import axios from 'axios';
import swal from 'sweetalert';
import '../CSS/style.css';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      choosenCategory: 'Minuman',
      keranjangs: [],
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

    axios
      .get(API_URL + '/keranjangs')
      .then((res) => {
        const keranjangs = res.data;
        console.log(keranjangs);
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.keranjangs !== prevState.keranjangs) {
      axios
        .get(API_URL + '/keranjangs')
        .then((res) => {
          const keranjangs = res.data;
          this.setState({ keranjangs });
        })
        .catch((error) => {
          console.log('Error yaa ', error);
        });
    }
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

  masukKeranjang = (value) => {
    axios
      .get(API_URL + '/keranjangs?product.id=' + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(API_URL + '/keranjangs', keranjang)
            .then((res) => {
              swal({
                title: 'Success!',
                text: keranjang.product.nama + ' Masuk Keranjang',
                icon: 'success',
                button: false,
                timer: 1000,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + '/keranjangs/' + res.data[0].id, keranjang)
            .then((res) => {
              swal({
                title: 'Success!',
                text: keranjang.product.nama + ' Masuk Keranjang',
                icon: 'success',
                button: false,
                timer: 1000,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, choosenCategory, keranjangs } = this.state;
    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories
              changeCategory={this.changeCategory}
              choosenCategory={choosenCategory}
            />
            <Col md={{ span: 7 }}>
              <h4>
                <strong>Daftar Produk</strong>
                <hr />
              </h4>
              <Row>
                {menus &&
                  menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                      masukKeranjang={this.masukKeranjang}
                    />
                  ))}
              </Row>
            </Col>
            <Hasil keranjangs={keranjangs} {...this.props} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
