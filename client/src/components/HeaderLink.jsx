/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Link } from 'rebass';
import { PropTypes } from 'prop-types';

const HeaderLink = ({ href, header }) => (
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
    href={href}
  >
    {header}
  </Link>
);

HeaderLink.propTypes = {
  href: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired
};
export default HeaderLink;
