import React, {Component} from 'react';
import '@fancyapps/fancybox/dist/jquery.fancybox.css'; //style for photo viewer library
import './assets/style.css';
import api from './Api';
import {
  REACT_APP_API_KEY,
  REACT_APP_API_ENDPOINT
} from "./var/env"; //get variable environment
import Gifphy from './components/Gifphy';

// import photo viewer library JS for app
// JQuery is dependency of FANCYBOX
import $ from 'jquery';
window.jQuery = $;
require('@fancyapps/fancybox/dist/jquery.fancybox');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listGifphy : [],
    };
    
  }
  
  componentDidMount() {
    this.getListGifPhoto();
  }
  
  getListGifPhoto() {
    api._get(`${REACT_APP_API_ENDPOINT}/gifs/trending?api_key=${REACT_APP_API_KEY}&limit=20`)
    .then(data => this.setState({
      listGifphy: data.data,
    })) // JSON from `response.json()` call
    .catch(error => console.error(error));
  }
  
  
  render() {
    //list gif photo
    const listGifphy = this.state.listGifphy.map((gifphy) =>
      <Gifphy
        gifphy={gifphy}
        key={gifphy.id}
      />
    );
    
    return (
      <div className="App">
        <div className="container">
          <div className="row clearfix">
            {listGifphy}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
