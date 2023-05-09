import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_TOPRATED_MEDIA: 'SET_TOPRATED_MEDIA',
};

function setTopRatedActionCreator(TopRatedMedia) {
  return {
    type: ActionType.SET_TOPRATED_MEDIA,
    payload: {
      TopRatedMedia,
    },
  };
}

function asyncSetTopRatedMedia(mediaType) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const TopRatedMedia = await api.getTopRatedMedia(mediaType);
      dispatch(setTopRatedActionCreator(TopRatedMedia));
    } catch (error) {
      return error;
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setTopRatedActionCreator,
  asyncSetTopRatedMedia,
};
