import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// google api browser key
const API_KEY = 'AIzaSyD_xKItWQ890Ux5MTBwWY9_cJaLdDwNx0o';

// component to generate html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//add html to dom
ReactDOM.render(<App />, document.getElementById('root'));
