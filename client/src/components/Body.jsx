/** @jsx jsx */

// import React from "react";
import { Box } from 'rebass';
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';

import { selectShow } from '../actions';
import Ad from './Ad';
import HomePage from './HomePage';

const Body = () => (
  <Box
    css={css`
      z-index: 1;
      position: relative;
      margin: 0px auto;
      margin-bottom: 30px;
      box-shadow: rgba(0, 0, 0, 0.8);
      padding-top: 68px;
      padding-bottom: 100px;
      min-height: 600px;
      max-width: 1140px;
      color: rgb(167, 172, 178);
      line-height: 20px;
    `}
    className="body-div"
    bg="rgb(34, 35, 37)"
  >
    <Ad />
    <HomePage />
  </Box>
);

const mapStateToProps = state => {
  console.log(state);
  return { selectedId: state.id, selectedIndex: state.index, selectedColumn: state.column };
};

export default connect(
  mapStateToProps,
  { selectShow }
)(Body);
