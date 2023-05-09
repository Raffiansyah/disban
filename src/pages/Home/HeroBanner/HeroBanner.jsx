import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetDiscoverMedia } from '../../../states/DiscoverMedia/action';
import Img from '../../../component/LazyLoad/Img';
import api from '../../../utils/api';

export default function HeroBanner() {
  const dispatch = useDispatch();
  const movie = useSelector((states) => states.DiscoverMedia);
  const background = movie?.[Math.floor(Math.random() * 20)]?.backdrop_path;

  useEffect(() => {
    dispatch(asyncSetDiscoverMedia('movie'));
  }, [dispatch]);
  return (
    <div className="relative flex items-center justify-center">
      <Img
        src={`${api.ORIGINAL_IMG}/${background}`}
        alt="Poster"
        className="object-cover h-screen md:h-[770px]"
      />
      <div className="absolute flex flex-col items-center justify-center p-5 text-center">
        <span className="font-bold  md:text-8xl text-4xl text-white">
          Welcome.
        </span>
        <span className="md:text-2xl text-sm font-medium mb-10 text-white">
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search for a movie or tv show..."
            className="w-full h-10 md:h-14 rounded-s-3xl ps-5 md:text-xl outline-none"
          />
          <button
            type="button"
            className="w-16 md:w-28 h-10 md:h-14 rounded-e-3xl bg-gradient-to-r from-purple-500 to-blue-500 md:text-base text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
