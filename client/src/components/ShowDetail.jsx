/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */

import { Box } from 'rebass';
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import data from '../dashboard.json';

const ShowDetail = ({ index, column }) => {
  const { Name, SeasonName, MediumSynopsis, FirstPremiereDate, Rating } = {
    ...data.Data.TitleRows[index].Titles[column]
  };
  return (
    <Box
      css={css`
        background: rgb(18, 18, 20);
        border-radius: 5px;
        box-sizing: border-box;
        display: block;
        margin-bottom: 10px;
        margin-top: -15px;
        position: relative;
      `}
    >
      <Box
        width={0.5}
        css={css`
          padding-left: 20px;
          padding-top: 5px;
          padding-bottom: 5px;
        `}
      >
        <Link style={{ textDecoration: 'none' }} to="/tv/">
          <h1
            css={css`
              font-size: 36px;
              font-family: 'Libre Franklin', sans-serif;
              font-weight: 500;
              line-height: 36px;
              color: rgb(0, 174, 240);
              cursor: pointer;
              text-transform: uppercase;
              text-decoration: none;
              --webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              &:hover {
                text-decoration: underline;
              }
            `}
          >
            {Name}
          </h1>
        </Link>
        <h2>{SeasonName}</h2>
        <p>{MediumSynopsis}</p>
        <ul>
          <li>Original Premiere: {moment(FirstPremiereDate).format('D/M/YYYY h:mm:ss a')}</li>
          <li>Versions: Broadcast ({Rating})</li>
          <li>Audio: Japanese, English</li>
          <li>Subtitles: English</li>
          <li>Genres: </li>
        </ul>
      </Box>
    </Box>
  );
};
ShowDetail.propTypes = {
  index: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired
};
export default ShowDetail;
