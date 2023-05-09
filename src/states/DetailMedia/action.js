import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_DETAIL_MEDIA: 'SET_DETAIL_MEDIA',
};

function setDetailMediaActionCreator(DetailMedia) {
  return {
    type: ActionType.SET_DETAIL_MEDIA,
    payload: {
      DetailMedia,
    },
  };
}

function asyncSetDetailMedia(mediaType, id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const DetailMedia = await api.getDetailMedia(mediaType, id);
      dispatch(setDetailMediaActionCreator(DetailMedia));
    } catch (error) {
      return error;
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setDetailMediaActionCreator,
  asyncSetDetailMedia,
};
