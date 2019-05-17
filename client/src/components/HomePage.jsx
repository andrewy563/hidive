/** @jsx jsx */

// import React from "react";
import { Box } from 'rebass';
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { selectShow } from '../actions';
import BigCarousel from './BigCarousel';
import ShowCarousel from './ShowCarousel';
import ShowDetail from './ShowDetail';
import data from '../dashboard.json';

const HomePage = ({ selectedId, selectedIndex, selectedColumn }) => (
  <div>
    <BigCarousel />
    {data.Data.TitleRows.map((category, index) => (
      <Box mx={15}>
        <ShowCarousel category={category.Name} index={index} />
        {index === selectedIndex ? (
          <ShowDetail id={selectedId} index={index} column={selectedColumn} />
        ) : null}
      </Box>
    ))}
  </div>
);

const mapStateToProps = state => {
  console.log(state);
  return { selectedId: state.id, selectedIndex: state.index, selectedColumn: state.column };
};

HomePage.propTypes = {
  selectedId: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  selectedColumn: PropTypes.number.isRequired
};
export default connect(
  mapStateToProps,
  { selectShow }
)(HomePage);
