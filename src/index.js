import React from 'react';
import ReactDOM from 'react-dom';
// import App from './reactDasar/App';
// import StateProps from './reactDasar/1stateProps';
// import Map from './reactDasar/2map';
// import LifeCycle from './reactDasar/3LifeCycle';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './CRUD';

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);
