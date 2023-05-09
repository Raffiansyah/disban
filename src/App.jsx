import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'swiper/css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './pages/Home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Explore from './pages/Explore/Explore';
import Detail from './pages/Detail/Detail';
import Loading from './component/Loading/Loading';

export default function App() {
  return (
    <>
      <Loading />
      <div className="bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/:mediaType/:id" element={<Detail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
