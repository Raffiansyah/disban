import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetTopRatedMedia } from '../../../states/TopRatedMedia/action';
import SwitchTab from '../../../component/SwitchTab/SwitchTab';
import Carousel from '../../../component/Carousel/Carousel';

export default function TopRated() {
  const [endPoint, setEndPoint] = useState('movie');
  const dispatch = useDispatch();
  const { results } = useSelector((states) => states.TopRatedMedia);

  useEffect(() => {
    dispatch(asyncSetTopRatedMedia(endPoint));
  }, [dispatch, endPoint]);

  const onTabsChange = (data) => {
    setEndPoint(data);
  };

  return (
    <div className="md:px-24 md:py-16 px-5 py-10">
      <div className="flex justify-between">
        <span className="md:font-semibold md:text-3xl font-medium text-xl text-white">
          Top Rated
        </span>
        <SwitchTab endpont1="movie" endpoint2="tv" title1="Movies" title2="Tv Shows" endPoint={endPoint} onTabsChange={onTabsChange} />
      </div>
      <Carousel results={results} />
    </div>
  );
}
