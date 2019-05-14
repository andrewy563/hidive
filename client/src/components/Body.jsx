/** @jsx jsx */

// import React from "react";
import { Box, Heading } from "rebass";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import BigCarousel from "./BigCarousel";
import Ad from "./Ad";

const StyledBody = styled(Box)`
  z-index: 1;
  position: relative;
  margin: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  max-width={1140}
`;

const Body = () => (
  <StyledBody width={3 / 5} bg="#222325" px="10">
    <Ad />
    <BigCarousel />
    <Heading>FREE EPISODES</Heading>
  </StyledBody>
);

export default Body;
