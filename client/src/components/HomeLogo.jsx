/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Link, Image } from 'rebass';

import logo from '../images/HIDIVE_logo.png';

const HomeLogo = () => (
  <Link
    css={css`
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
    `}
    href="/"
  >
    <Image src={logo} height={35} />
  </Link>
);

export default HomeLogo;
