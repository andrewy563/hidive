/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import Slider from 'react-slick';
import { Box, Link, Image } from 'rebass';

import first from '../images/bigcarousel1.png';
import second from '../images/bigcarousel2.png';
import third from '../images/bigcarousel3.gif';

import './SlickCarousel.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000
};

const BigCarousel = () => (
  <Box mb={45}>
    <Slider
      {...settings}
      css={css`
        margin-bottom: 30px;
      `}
    >
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
    </Slider>
  </Box>
);

export default BigCarousel;
