import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetPopularMedia } from '../../../states/PopularMedia/action';
import SwitchTab from '../../../component/SwitchTab/SwitchTab';
import Carousel from '../../../component/Carousel/Carousel';

export default function Popular() {
  const [endPoint, setEndpoint] = useState('movie');
  const dispatch = useDispatch();
  const { results } = useSelector((states) => states.PopularMedia);

  useEffect(() => {
    dispatch(asyncSetPopularMedia(endPoint));
  }, [dispatch, endPoint]);

  const onTabsChange = (data) => {
    setEndpoint(data);
  };

  return (
    <div className="md:px-24 md:py-16 px-5 py-10">
      <div className="flex justify-between">
        <span className="md:font-semibold md:text-3xl font-medium text-xl text-white">Whats Popular</span>
        <SwitchTab endpont1="movie" endpoint2="tv" title1="Movies" title2="Tv Shows" endPoint={endPoint} onTabsChange={onTabsChange} />
      </div>
      <Carousel results={results} />
    </div>
  );
}
