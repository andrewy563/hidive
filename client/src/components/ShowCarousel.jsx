/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { Box, Link, Image } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ShowCarousel.css";

import first from "../images/bigcarousel1.png";
import second from "../images/bigcarousel2.png";
import third from "../images/bigcarousel3.gif";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  dotsClass: "slick-dots slick-show"
};

const ShowCarousel = ({ category }) => (
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
      <div>
        <Link href="https://www.hidive.com/devices">
          <Image src={first} />
        </Link>
      </div>
      <div>
        <Link href="https://www.hidive.com/simulcasts">
          <Image src={second} />
        </Link>
      </div>
      <div>
        <Link href="https://www.hidive.com/account/signup">
          <Image src={third} />
        </Link>
      </div>
      <div>
        <Link href="https://www.hidive.com/account/signup">
          <Image src={third} />
        </Link>
      </div>
      <div>
        <Link href="https://www.hidive.com/account/signup">
          <Image src={third} />
        </Link>
      </div>
      <div>
        <Link href="https://www.hidive.com/account/signup">
          <Image src={third} />
        </Link>
      </div>
    </Slider>
  </Box>
);
ShowCarousel.propTypes = {
  category: PropTypes.string.isRequired
};

export default ShowCarousel;
