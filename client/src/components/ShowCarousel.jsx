/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Box } from 'rebass';

import ShowItem from './ShowItem';

import data from '../dashboard.json';
import './SlickCarousel.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  dotsClass: 'slick-dots show-dots'
};

const ShowCarousel = ({ category, index }) => (
  <Box mb={15}>
    <h1
      css={css`
        font-family: "Libre Franklin", sans-serif;
        color: rgb(150, 150, 150);
        font-size: 24px;
        font-weight: 500;
        line-height: 28.8px;
        margin-block-end: 5px
        margin-bottom: 0px;
        text-transform: uppercase;
      `}
    >
      {category}
    </h1>
    <Slider {...settings} infinite={data.Data.TitleRows[index].Titles.length >= 5}>
      {data.Data.TitleRows[index].Titles.map((show, i) => (
        <ShowItem {...show} Row={index} column={i} />
      ))}
    </Slider>
  </Box>
);
ShowCarousel.propTypes = {
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default ShowCarousel;
