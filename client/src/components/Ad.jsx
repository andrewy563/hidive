/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { PureComponent } from 'react';
import { Box, Link, Image } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ad from '../images/ad.png';

class Ad extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { visible: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible ? (
          <Box className="ad-box" mx={15} py={15}>
            <Link href="https://google.com/">
              <Image src={ad} />
            </Link>
            <FontAwesomeIcon
              icon="times"
              onClick={this.handleClick}
              size="sm"
              css={css`
                z-index: 10;
                position: relative;
                top: -81px;
                float: right;
                right: 5px;
                color: #fff;
                opacity: 1;
                cursor: pointer;
                font-weight: 700;
              `}
            />
          </Box>
        ) : null}
      </div>
    );
  }
}

export default Ad;
