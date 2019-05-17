/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import { Image } from 'rebass';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectShow } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  hoverOn = () => () => {
    this.setState({ hover: true });
  };

  hoverOff = () => () => {
    this.setState({ hover: false });
  };

  onClick = (id, index, column) => () => {
    this.props.selectShow(id, index, column);
  };

  render() {
    const { Id, MasterArtUrl, Name, Row, column } = this.props;
    const { hover } = this.state;
    return (
      <div
        onMouseEnter={this.hoverOn()}
        onMouseLeave={this.hoverOff()}
        onClick={this.onClick(Id, Row, column)}
        key={Id}
        css={css`
          position: relative;
          margin: 0px 2px;
          text-align: center;
          color: white !important;
          cursor: pointer;
        `}
      >
        <Image
          src={MasterArtUrl}
          css={css`
            border-radius: 4px;
            ${hover
              ? css`
                  -webkit-filter: brightness(50%);
                  -webkit-transition: all 0.5s ease;
                  -moz-transition: all 0.5s ease;
                  -o-transition: all 0.5s ease;
                  -ms-transition: all 0.5s ease;
                  transition: all 0.5s ease;
                `
              : null}
          `}
        />
        <FontAwesomeIcon
          icon="play-circle"
          css={css`
            font-size: 43px;
            position: absolute;
            top: 7.5%;
            left: 90px;
            &:hover {
              color: #00aef0;
            }
            visibility: ${hover ? 'visible' : 'hidden'};
          `}
        />
        <h3
          css={css`
            font-size: 14px;
            font-family: "Libre Franklin", sans-serif;
            margin: 0px auto 3px auto;
            padding: 0px;
            font-size: 14px;
            width: 100%;
            font-weight: 600;
            height: 2.2em;
            overflow: hidden;
            white-space: normal;
            text-overflow: ellipsis;
            color: white !important;
            line-height: 1.2em;
            text-transform: uppercase;
            position: absolute;
            top:50%;
            display: inline-block
            left: 90px;
            &:hover {
              color: #00aef0;
            }
            visibility: ${hover ? 'visible' : 'hidden'};
          `}
        >
          {Name}
        </h3>
        <FontAwesomeIcon
          icon="chevron-down"
          css={css`
            font-size: 30px;
            position: absolute;
            bottom: 0%;
            left: 100px;
            visibility: ${hover ? 'visible' : 'hidden'};
          `}
        />
      </div>
    );
  }
}
ShowItem.propTypes = {
  MasterArtUrl: PropTypes.string.isRequired,
  KeyArtUrl: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Id: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired
};

export default connect(
  null,
  { selectShow }
)(ShowItem);
