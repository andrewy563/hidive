/** @jsx jsx */

// import React from "react";
import { Box } from 'rebass';
import { css, jsx } from '@emotion/core';
import BigCarousel from './BigCarousel';
import Ad from './Ad';
import ShowCarousel from './ShowCarousel';
import data from '../dashboard.json';

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
    <BigCarousel />
    {data.Data.TitleRows.map((category, index) => (
      <ShowCarousel category={category.Name} index={index} />
    ))}
  </Box>
);

export default Body;
