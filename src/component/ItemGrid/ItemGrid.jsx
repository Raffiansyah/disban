import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Img from '../LazyLoad/Img';
import api from '../../utils/api';
import CircleRating from '../CircleRating/CircleRating';
import { showFormattedDate } from '../../utils/formatedDate';

export default function ItemGrid({ results }) {
  return (
    <div className="grid md:grid-cols-5 md:gap-x-5 grid-cols-2 gap-x-3">
      {results?.map((data) => (
        <Link to={`/${data.media_type}/${data.id}`} key={data.id}>
          <div className="relative">
            <Img
              src={`${api.W500_IMG}${data.poster_path}`}
              alt={data.title}
              className="rounded-2xl"
            />
            <CircleRating rating={data.vote_average.toFixed(1)} />
          </div>
          <div className="py-5 text-white">
            <p className="md:text-xl text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap w-36 md:w-52">
              {data.title || data.name}
            </p>
            <p className="text-sm text-slate-500">
              {showFormattedDate(data.release_date || data.first_air_date)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

// ItemGrid.propTypes = {
//   results: PropTypes.arrayOf().isRequired,
// };
