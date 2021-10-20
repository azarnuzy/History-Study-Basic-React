import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import { Home, Sukses } from './pages';

export default class ReactApi extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/sukses" component={Sukses} exact />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}
