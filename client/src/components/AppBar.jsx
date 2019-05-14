/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Flex, Box, Link, Image, Button } from 'rebass';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../images/HIDIVE_logo.png';

const StyledHeaderLink = styled(Link)`
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  color: white;
  flex-shrink: 0;
  vertical-align: middle;
  text-align: left;
  font-style: normal;
  text-decoration-line: none;
  text-transform: uppercase;
  &:hover {
    color: #00aef0;
  }
`;
const StyledDropdown = styled(Button)`
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  font-family: 'Roboto' sans-serif;
  font-style: normal;
  flex-shrink: 0;
  &:hover {
    color: #00aef0;
  }
`;

const AppBar = () => (
  <Box
    width={1}
    className="navbar"
    css={css`
      z-index: 1000;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
      min-height: 50px;
      background: rgba(0, 0, 0, 0.85);
    `}
  >
    <Flex
      className="navbar-content"
      alignItems="center"
      flexWrap="wrap"
      css={css`
        margin-bottom: 5px;
        padding-top: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1140px;
      `}
    >
      <Box className="row" width={0.75} alignSelf="center">
        <StyledHeaderLink href="/">
          <Image src={logo} height={35} />
        </StyledHeaderLink>
        <StyledHeaderLink href="/">SIMULCASTS</StyledHeaderLink>
        <StyledHeaderLink href="/">DUBS</StyledHeaderLink>
        <StyledHeaderLink href="/">SERIES</StyledHeaderLink>
        <StyledHeaderLink href="/">MOVIES</StyledHeaderLink>
        <StyledHeaderLink href="/">FREE!</StyledHeaderLink>
        <StyledHeaderLink color="#A7ACB2" href="/">
          |
        </StyledHeaderLink>
        <StyledHeaderLink>SCHEDULE</StyledHeaderLink>
        <StyledDropdown bg="transparent">STORE</StyledDropdown>
        <StyledHeaderLink>NEWS</StyledHeaderLink>
      </Box>
      <Box width={0.25}>
        <StyledHeaderLink>FREE TRIAL!</StyledHeaderLink>
        <StyledDropdown bg="transparent" flex-shrink={0}>
          <FontAwesomeIcon icon="search" />
        </StyledDropdown>
        <StyledDropdown bg="transparent" flex-shrink={0}>
          <FontAwesomeIcon icon="user" />
        </StyledDropdown>
      </Box>
    </Flex>
  </Box>
);

export default AppBar;
