import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import { Home, Success } from './pages';

export default class ReactApi extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/sukses" component={Success} exact />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}
