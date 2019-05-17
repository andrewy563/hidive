/** @jsx jsx */

import { jsx } from '@emotion/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  faSearch,
  faUser,
  faAngleLeft,
  faAngleRight,
  faTimes,
  faPlayCircle,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faYoutube,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AppBar from './components/AppBar';
import Body from './components/Body';

library.add(
  faSearch,
  faUser,
  faAngleLeft,
  faTimes,
  faAngleRight,
  faPlayCircle,
  faChevronDown,
  faFacebookSquare,
  faYoutube,
  faTwitter,
  faInstagram
);

const App = () => (
  <Router>
    <div>
      <AppBar />
      <Body className="body-component" />
    </div>
  </Router>
);

export default App;
