import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import PopularMediaReducer from './PopularMedia/reducer';
import TopRatedMediaReducer from './TopRatedMedia/reducer';
import DetailMediaReducer from './DetailMedia/reducer';
import TrendingMovieReducer from './TrendingMovie/reducer';
import DiscoverMediaReducer from './DiscoverMedia/reducer';

const store = configureStore({
  reducer: {
    PopularMedia: PopularMediaReducer,
    TopRatedMedia: TopRatedMediaReducer,
    DetailMedia: DetailMediaReducer,
    TrendingMovie: TrendingMovieReducer,
    DiscoverMedia: DiscoverMediaReducer,
    LoadingBar: loadingBarReducer,
  },
});

export default store;
