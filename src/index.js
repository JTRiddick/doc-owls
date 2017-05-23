import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from './routes';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
      <Routes />
  </BrowserRouter>,

  document.getElementById('root')
);
