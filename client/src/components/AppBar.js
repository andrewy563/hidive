import React, { Component } from 'react';
import { Flex, Box, Link, Image, Button, Text } from 'rebass'
import logo from '../images/HIDIVE_logo.png'
import styled from '@emotion/styled'
import Color from 'color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var bgbar = Color('#000000').alpha(0.85)

const StyledHeaderLink = styled(Link)`
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  font-size: 13px !important;
  font-family: 'Roboto' sans-serif;
  font-style: normal;
  letter-spacing: 1px;
  font-weight: 400;
  flex-shrink: 0;
  text-decoration: none;
  &:hover {
    color: #00AEF0
  }
`
const StyledDropdown = styled(Button)`
  padding-right: 10px;
  padding-left: 10px;
  color: white;
  font-size: 13px !important;
  font-family: 'Roboto' sans-serif;
  font-style: normal;
  font-weight: 400;
  flex-shrink: 0;
  &:focus: {
    color: #00AEF0
  }
`


const StyledFlex = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
`

class AppBar extends Component {

  render() {

    return (
    <StyledFlex
      width={1}
      bg='black'
      alignItems='center'
      py={15}
      flexWrap='wrap'
    >
      <Box width={1/5}/>
        <StyledHeaderLink href="/" pr={10} flex-shrink={0}>
          <Image
            src={logo}
            height={35}
          />
        </StyledHeaderLink>
        <StyledHeaderLink href="/">SIMULCASTS</StyledHeaderLink>
        <StyledHeaderLink href="/">DUBS</StyledHeaderLink>
        <StyledHeaderLink href="/">SERIES</StyledHeaderLink>
        <StyledHeaderLink href="/">MOVIES</StyledHeaderLink>
        <StyledHeaderLink href="/">FREE!</StyledHeaderLink>
        <Text color='gray' fontSize={13} px={10}> | </Text>
        <StyledHeaderLink>SCHEDULE</StyledHeaderLink>
        <StyledDropdown bg='transparent'>STORE</StyledDropdown>
        <StyledHeaderLink>NEWS</StyledHeaderLink>
        <Box mx='auto'/>
        <StyledHeaderLink>FREE TRIAL!</StyledHeaderLink>
        <StyledDropdown bg='transparent' flex-shrink={0}>
          <FontAwesomeIcon icon="search"/>
        </StyledDropdown>
        <StyledDropdown bg= 'transparent' flex-shrink={0}>
          <FontAwesomeIcon icon="user"/>
        </StyledDropdown>
      <Box width={1/5}/>
    </StyledFlex>
    )
  }
}

export default AppBar;
