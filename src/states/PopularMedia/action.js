import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_POPULAR_MEDIA: 'SET_POPULAR_MEDIA',
};

function setPopularMediaActionCreator(PopularMedia) {
  return {
    type: ActionType.SET_POPULAR_MEDIA,
    payload: {
      PopularMedia,
    },
  };
}

function asyncSetPopularMedia(mediaType) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const PopularMedia = await api.getPopularMedia(mediaType);
      dispatch(setPopularMediaActionCreator(PopularMedia));
    } catch (error) {
      return error;
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setPopularMediaActionCreator,
  asyncSetPopularMedia,
};
