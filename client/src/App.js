import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faUser, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import AppBar from './components/AppBar.js';
import Body from './components/Body.js';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

library.add(faSearch, faUser, faAngleLeft);

class App extends Component {
  render() {
    return (
      <div>
        <AppBar/>
        <Body/>
      </div>
    );
  }
}

export default App;
