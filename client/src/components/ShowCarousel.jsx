import React from "react";
import Slider from "react-slick";
import { Box, Link, Image } from "rebass";

import "./BigCarousel.css";

import first from "../images/bigcarousel1.png";
import second from "../images/bigcarousel2.png";
import third from "../images/bigcarousel3.gif";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 4000,
  dotsClass: "slick-dots slick-thumb"
};

const BigCarousel = () => (
  <Box mb={30}>
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
    </Slider>
  </Box>
);

export default BigCarousel;
