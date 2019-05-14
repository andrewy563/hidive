import React from "react";
import { Flex, Box, Link, Image, Button, Text } from "rebass";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../images/HIDIVE_logo.png";

const StyledHeaderLink = styled(Link)`
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  font-size: 13px !important;
  font-family: "Roboto" sans-serif;
  font-style: normal;
  letter-spacing: 0.5px;
  font-weight: 400;
  flex-shrink: 0;
  text-decoration: none;
  &:hover {
    color: #00aef0;
  }
`;
const StyledDropdown = styled(Button)`
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  font-size: 13px !important;
  font-family: "Roboto" sans-serif;
  font-style: normal;
  font-weight: 400;
  flex-shrink: 0;
  &:hover {
    color: #00aef0;
  }
`;

const StyledFlex = styled(Flex)`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

const AppBar = () => (
  <StyledFlex
    width={1}
    alignItems="center"
    py={15}
    bg="rgba(0,0,0,0.85)"
    flexWrap="wrap"
  >
    <Box width={1 / 5} />
    <StyledHeaderLink href="/" pr={10} flex-shrink={0}>
      <Image src={logo} height={35} />
    </StyledHeaderLink>
    <StyledHeaderLink href="/">SIMULCASTS</StyledHeaderLink>
    <StyledHeaderLink href="/">DUBS</StyledHeaderLink>
    <StyledHeaderLink href="/">SERIES</StyledHeaderLink>
    <StyledHeaderLink href="/">MOVIES</StyledHeaderLink>
    <StyledHeaderLink href="/">FREE!</StyledHeaderLink>
    <Text color="#A7ACB2" fontSize={13} px={10}>
      |
    </Text>
    <StyledHeaderLink>SCHEDULE</StyledHeaderLink>
    <StyledDropdown bg="transparent">STORE</StyledDropdown>
    <StyledHeaderLink>NEWS</StyledHeaderLink>
    <Box mx="auto" />
    <StyledHeaderLink>FREE TRIAL!</StyledHeaderLink>
    <StyledDropdown bg="transparent" flex-shrink={0}>
      <FontAwesomeIcon icon="search" />
    </StyledDropdown>
    <StyledDropdown bg="transparent" flex-shrink={0}>
      <FontAwesomeIcon icon="user" />
    </StyledDropdown>
    <Box width={1 / 5} />
  </StyledFlex>
);

export default AppBar;
