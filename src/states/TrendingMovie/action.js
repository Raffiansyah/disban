import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_TRENDING_MOVIE: 'SET_TRENDING_MOVIE',
};

function setTrendingMovieActionCreator(TrendingMovie) {
  return {
    type: ActionType.SET_TRENDING_MOVIE,
    payload: {
      TrendingMovie,
    },
  };
}

function asyncSetTrendingMovie(time) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const TrendingMovie = await api.getTrendingMovie(time);
      dispatch(setTrendingMovieActionCreator(TrendingMovie));
    } catch (error) {
      return error;
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setTrendingMovieActionCreator,
  asyncSetTrendingMovie,
};
