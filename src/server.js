import path from 'path';
import {Server} from 'http';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';

//initialize server and configure ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// folder for static assets
app.use(Express.static(path.join(__dirname,'static')));

// universal routing and renderToString
app.get('*',(req,res)=> {
  match(
    {
      routes, location:req.url
    },
    (err, redirectLocation, renderProps) => {
      //in case of error
      if(err){
        return res.status(500).send(err.message);
      }

      //in case of redirect propagate the direct to the browser
      if (redirectLocation){
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // React markup for current foute
      let markup;
      if (renderProps){
        // if the current route matched
        markup = renderToString(<RouterContext{...renderProps}/>);
      } else {
        //else render 404 not found
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }
      // render the index template with embedded React
      return res.render('index',{markup});
      //wait, whats markup?
      console.log('markup is',markup);
    }
  );
});

//start the server

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port,err =>{
  if (err){
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port}[${env}]`);
});
