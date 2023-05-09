import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { asyncSetDiscoverMedia, asyncSetNewDiscoverMedia } from '../../states/DiscoverMedia/action';
import ItemGrid from '../../component/ItemGrid/ItemGrid';

export default function Explore() {
  const param = useParams();
  const dispatch = useDispatch();
  const Media = useSelector((states) => states.DiscoverMedia);
  const [pageNum, setPageNum] = useState(2);

  function nextData() {
    dispatch(asyncSetNewDiscoverMedia(param.mediaType, pageNum));
    setPageNum((prev) => prev + 1);
  }
  useEffect(() => {
    const initialData = () => {
      dispatch(asyncSetDiscoverMedia(param.mediaType));
    };
    initialData();
  }, [dispatch, param.mediaType]);

  const mediaList = Media.map((media) => media.results);
  console.log(mediaList);

  return (
    <div className="w-full h-full md:px-10 md:py-28 py-24 px-5">
      <div className="pb-10">
        <h1 className="md:font-semibold md:text-3xl font-medium text-xl text-white">
          {param.mediaType === 'movie' ? 'Explore Movies' : 'Explore Tv Shows'}
        </h1>
      </div>
      {/* <ItemGrid results={mediaList} /> */}
      <button type="button" onClick={nextData}>test</button>
    </div>
  );
}
