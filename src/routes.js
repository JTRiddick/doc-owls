
// src/routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

import PostsNew from './components/PostsNew';
import PostsIndex from './components/PostsIndex';
import PostsShow from './components/PostsShow';



const Routes = (props) => (
  <Switch {...props}>
    <Route path="/posts/new" component={PostsNew} />
    <Route path="/posts/:id" component={PostsShow} />
    <Route path="/posts" component={PostsIndex}/>
    <Route path="/about" component={About} />
    <Route path="/" component={App} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
