import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import AppBar from './components/AppBar.js';

library.add(faSearch, faUser);

class App extends Component {
  render() {
    return (
      <AppBar>
        Hello Grommet!
      </AppBar>
    );
  }
}

export default App;
