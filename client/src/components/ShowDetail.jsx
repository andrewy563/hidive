/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */

import { Box, Link } from 'rebass';
import { css, jsx } from '@emotion/core';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import data from '../dashboard.json';

const ShowDetail = ({ id, index, column }) => {
  const { Name, SeasonName, MediumSynopsis, FirstPremiereDate, Rating } = {
    ...data.Data.TitleRows[index].Titles[column]
  };
  return (
    <Box>
      <Box>
        <Link
          css={css`
            font-size: 36px;
            font-family: 'Libre Franklin', sans-serif;
            font-seight: 500;
            line-height: 36px;
            color: rgb(0, 174, 240);
            cursor: pointer;
            text-transform: uppercase;
            --webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          `}
          href="/"
        >
          {Name}
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
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired
};
export default ShowDetail;
