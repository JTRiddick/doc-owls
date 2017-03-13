import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import SubjectPage from './components/SubjectPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="subject/:id" component={SubjectPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
