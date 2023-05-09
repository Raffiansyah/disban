import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetTrendingMovie } from '../../../states/TrendingMovie/action';
import Carousel from '../../../component/Carousel/Carousel';
import SwitchTab from '../../../component/SwitchTab/SwitchTab';

export default function Trending() {
  const [endPoint, setEndPoint] = useState('week');
  const dispatch = useDispatch();
  const { results } = useSelector((states) => states.TrendingMovie);

  useEffect(() => {
    dispatch(asyncSetTrendingMovie(endPoint));
  }, [dispatch, endPoint]);

  const onTabsChange = (data) => {
    setEndPoint(data);
  };

  return (
    <div className="md:px-24 md:py-16 px-5 py-10">
      <div className="flex justify-between">
        <span className="md:font-semibold md:text-3xl font-medium text-xl text-white">
          Trendings
        </span>
        <SwitchTab endpont1="week" endpoint2="day" title1="This Weeks" title2="Today" endPoint={endPoint} onTabsChange={onTabsChange} />
      </div>
      <Carousel results={results} />
    </div>
  );
}
