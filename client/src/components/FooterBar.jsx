/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Flex, Box, Link } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footerStyle = css`
  display: inline-block;
  padding-left: 15px;
  font-size: 12px;
  border-left-color: rgb(136, 136, 136);
  font-weight: 300;
  line-height: 20px;
  text-align: left;
`;

const footerLinkStyle = css`
  color: rgb(191, 191, 191);
  text-decoration: none;
  --webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:hover {
    text-decoration: underline;
    color: #00aef0;
  }
`;

const listStyle = css`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 5px;
`;

const FooterBar = () => (
  <Box
    width={1}
    css={css`
      z-index: 1000;
      min-height: 50px;
      color: rgb(191, 191, 191);
      background: rgba(41, 42, 44, 0.95);
      bottom: 0px;
      box-sizing: border-box;
      overflow-x: auto;
      overflow-y: auto;
      padding-bottom: 10px;
      right: 0px;
    `}
  >
    <Flex
      flexDirection="row"
      css={css`
        margin-bottom: 5px;
      `}
    >
      <Box width={0.75}>
        <ul css={listStyle}>
          <li css={footerStyle}>
            <Link href="https://www.hidive.com/signup" css={footerLinkStyle}>
              Sign Up
            </Link>
          </li>
          <li css={footerStyle}>
            <Link href="https://help.hidive.com/" css={footerLinkStyle}>
              Help Center
            </Link>
          </li>
          <li css={footerStyle}>
            <Link href="https://www.hidive.com/about" css={footerLinkStyle}>
              About Us
            </Link>
          </li>
          <li css={footerStyle}>
            <Link href="/" css={footerLinkStyle}>
              Contact Us
            </Link>
          </li>
          <li css={footerStyle}>
            <Link href="https://www.hidive.com/careers" css={footerLinkStyle}>
              Careers
            </Link>
          </li>
          <li css={footerStyle}>
            <Link href="https://www.hidive.com/privacy-policy" css={footerLinkStyle}>
              Privacy Policy
            </Link>
          </li>
          <li css={footerStyle}>
            <Link href="https://www.hidive.com/terms-of-use" css={footerLinkStyle}>
              Terms of Use
            </Link>
          </li>
          <li css={footerStyle}>
            <Link href="https://www.hidive.com/news" css={footerLinkStyle}>
              Press
            </Link>
          </li>
          <li css={footerStyle}>
            <Link href="https://www.hidive.com/devices" css={footerLinkStyle}>
              Devices
            </Link>
          </li>
        </ul>
        <div
          css={[
            footerStyle,
            css`
              padding-left: 30px;
            `
          ]}
        >
          HIDIVE and the logos ™ and © HIDIVE, LLC.
        </div>
      </Box>
      <Flex width={0.25} px={15} justifyContent="flex-end">
        <ul
          css={css`
            padding-left: 0px;
          `}
        >
          <li css={footerStyle}>
            <Link href="https://www.facebook.com/HIDIVEofficial" css={footerLinkStyle}>
              {' '}
              <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" />
            </Link>
          </li>
          <li css={footerStyle}>
            {' '}
            <Link href="https://www.twitter.com/HIDIVEofficial" css={footerLinkStyle}>
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
            </Link>
          </li>
          <li css={footerStyle}>
            {' '}
            <Link
              href="https://www.youtube.com/channel/UCeFzTMpr7ik6oU5MT_YAYzg"
              css={footerLinkStyle}
            >
              <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
            </Link>
          </li>
          <li css={footerStyle}>
            {' '}
            <Link href="https://www.instagram.com/HIDIVEofficial" css={footerLinkStyle}>
              <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
            </Link>
          </li>
        </ul>
      </Flex>
    </Flex>
  </Box>
);

export default FooterBar;
