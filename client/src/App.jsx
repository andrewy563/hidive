/** @jsx jsx */

import { jsx } from '@emotion/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faUser,
  faAngleLeft,
  faAngleRight,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AppBar from './components/AppBar';
import Body from './components/Body';

library.add(faSearch, faUser, faAngleLeft, faTimes, faAngleRight);

const App = () => (
  <div>
    <AppBar />
    <Body className="body-component" />
  </div>
);

export default App;
