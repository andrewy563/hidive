/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Box, Link, Image } from 'rebass';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../dashboard.json';

import './ShowCarousel.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  dotsClass: 'slick-dots slick-show'
};

const ShowCarousel = ({ category, index }) => (
  <Box mb={15} mx={15}>
    <h1
      css={css`
        font-family: "Libre Franklin", sans-serif;
        color: rgb(150, 150, 150);
        font-size: 24px;
        font-weight: 500;
        line-heihgt: 28.8px;
        margin-block-end: 5px
        margin-bottom: 0px;
        text-transform: uppercase;
      `}
    >
      {category}
    </h1>
    <Slider {...settings}>
      {data.Data.TitleRows[index].Titles.map((show, i) => (
        <div className={i}>
          <Image src={show.MasterArtUrl} />
        </div>
      ))}
    </Slider>
  </Box>
);
ShowCarousel.propTypes = {
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default ShowCarousel;
