import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// youtube api browser key
const API_KEY = 'AIzaSyD_xKItWQ890Ux5MTBwWY9_cJaLdDwNx0o';



// component to generate html
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo:null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //if key:value have the same name {videos: videos}, we can shorten to...
      this.setState({
         videos:videos,
         selectedVideo:videos[0]
       });
    })
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

//add html to dom
ReactDOM.render(<App />, document.getElementById('root'));
