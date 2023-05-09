import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import Trending from './Trending/Trending';
import Popular from './Popular/Popular';
import TopRated from './TopRated/TopRated';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </>
  );
}
