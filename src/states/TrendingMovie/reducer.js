import { ActionType } from './action';

function TrendingMovieReducer(TrendingMovie = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_TRENDING_MOVIE:
      return action.payload.TrendingMovie;
    default:
      return TrendingMovie;
  }
}

export default TrendingMovieReducer;
