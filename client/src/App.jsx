import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faUser,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppBar from "./components/AppBar";
import Body from "./components/Body";

library.add(faSearch, faUser, faAngleLeft);

const App = () => (
  <div>
    <h4>HELLO</h4>
    <AppBar />
    <Body />
  </div>
);

export default App;
