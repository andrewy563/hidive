/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Flex, Box, Button } from 'rebass';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HomeLogo from './HomeLogo';
import HeaderLink from './HeaderLink';
import Search from './Search';

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
      flexWrap="wrap"
      css={css`
        margin-bottom: 5px;
        padding-top: 15px;
        margin-right: auto;
        margin-left: auto;
        max-width: 1140px;
      `}
    >
      <Flex className="row" alignItems="center" width={0.75}>
        <HomeLogo />
        <HeaderLink href="/" header="simulcasts" />
        <HeaderLink href="/" header="dubs" />
        <HeaderLink href="/" header="series" />
        <HeaderLink href="/" header="movies" />
        <HeaderLink href="/" header="free!" />
        <small
          css={css`
            color: #a7acb2;
            font-size: 13px;
            vertical-align: middle;
            padding-right: 10px;
            padding-left: 10px;
            position: relative;
            &:hover {
              color: #a7acb2;
            }
          `}
        >
          |
        </small>
        <HeaderLink href="/" header="schedule" />
        <StyledDropdown bg="transparent">STORE</StyledDropdown>
        <HeaderLink href="/" header="news" />
      </Flex>
      <Flex width={0.25} alignItems="center" justifyContent="flex-end">
        <HeaderLink href="/" header="free trial!" />
        <Search />
        <StyledDropdown bg="transparent" flex-shrink={0}>
          <FontAwesomeIcon icon="user" />
        </StyledDropdown>
      </Flex>
    </Flex>
  </Box>
);

export default AppBar;
