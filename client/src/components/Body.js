/** @jsx jsx */

import React, { Component } from 'react';
import { Flex, Box, Link, Image, Button, Text, Heading } from 'rebass'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import ad from '../images/ad.png';
import BigCarousel from './BigCarousel.js';

class Ad extends Component {
  constructor(props) {
    super(props);

    this.state = {visible: true};
  }

  handleClick() {
    this.setState({visible: false});
  }

  render() {
    return (
      <div 
      >
        {this.state.visible ? 
        <Box className="ad-box"
          mx={20}
          py={15}
        >
        <Link href='https://google.com/'>
          <Image
          src={ad}
          />
        </Link>
        <Button onClick={this.handleClick.bind(this)}>
          hello
        </Button>
        </Box>
        : null}
      </div>
    )
  }
}
const StyledBody = styled(Box)`
  z-index: 1;
  position: relative;
  margin: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  max-width={1140}
`

class Body extends Component {
    render() {
      return (
          <StyledBody
            width={3/5}
            bg='#222325'
            px='10'
          >
            <Box pt={68}/>
            <Ad/>
            <BigCarousel/>
            <Heading>FREE EPISODES</Heading>
          </StyledBody>
      )
      }
}

export default Body;
