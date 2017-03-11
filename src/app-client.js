import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import style from '../src/sass/style.scss';


window.onload = () => {
  ReactDOM.render(<AppRoutes/>,document.getElementById('main'));
};
