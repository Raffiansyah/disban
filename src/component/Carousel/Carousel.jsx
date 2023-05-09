import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../utils/api';
import Img from '../LazyLoad/Img';
import CircleRating from '../CircleRating/CircleRating';
import { showFormattedDate } from '../../utils/formatedDate';

export default function Carousel({ results }) {
  return (
    <div className="py-10">
      <Swiper
        navigation
        breakpoints={{
          375: {
            spaceBetween: 5,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 15,
            slidesPerView: 5,
          },
        }}
      >
        {results?.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/${data.media_type}/${data.id}`}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

Carousel.propTypes = {
  results: PropTypes.arrayOf().isRequired,
};
