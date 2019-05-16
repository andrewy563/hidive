/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import { Flex } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  onClick = () => () => {
    this.setState({ focus: true });
    console.log('hi');
  };

  offClick = () => () => {
    this.setState({ focus: false });
  };
  render() {
    const { focus } = this.state;
    return (
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
          onClick={this.onClick()}
          icon="search"
          css={css`
            font-size: 20px;
            position: relative;
            padding-right: 10px;
            padding-left: 10px;
            bottom: 5px;
            color: white;
            font-family: 'Roboto' sans-serif;
            font-style: normal;
            flex-shrink: 0;
            &:hover {
              color: #00aef0;
            }
          `}
        />
      </Flex>
    );
  }
}

export default Search;
