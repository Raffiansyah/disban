import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircleRating({ rating }) {
  return (
    <div className="md:w-[55px] w-[45px] bg-white rounded-full p-1 absolute -bottom-2 left-2 font-bold ">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
          textSize: '34px',
          textColor: 'black',
        })}
      />
    </div>
  );
}

CircleRating.propTypes = {
  rating: PropTypes.string.isRequired,
};
