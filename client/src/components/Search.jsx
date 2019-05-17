/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Flex } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => (
  <Flex alignItems="center">
    <input
      css={css`
        background-color: rgb(34, 35, 37);
        background-origin: padding-box;
        border-color: rgb(85, 85, 85);
        border-style: solid;
        border-radius: 5px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color: rgb(167, 172, 178);
      `}
    />
    <FontAwesomeIcon
      icon="search"
      css={css`
        position: relative;
        padding-right: 10px;
        padding-left: 10px;
        color: white;
        font-family: 'Roboto' sans-serif;
        font-style: normal;
        flex-shrink: 0;
        &:hover {
          color: #00aef0;
        }
      `}
      size="lg"
    />
  </Flex>
);

export default Search;
