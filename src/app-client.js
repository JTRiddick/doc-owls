import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
require('./sass/style.scss');
import style from './sass/style.scss';


window.onload = () => {
  ReactDOM.render(<AppRoutes/>,document.getElementById('main'));
};
