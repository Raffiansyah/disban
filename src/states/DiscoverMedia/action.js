import api from '../../utils/api';

const ActionType = {
  SET_DISCOVER_MEDIA: 'SET_DISCOVER_MEDIA',
  SET_NEWDISCOVER_MEDIA: 'SET_NEWDISCOVER_MEDIA',
};

function setDiscoverMediaActionCreator(DiscoverMedia) {
  return {
    type: ActionType.SET_DISCOVER_MEDIA,
    payload: {
      DiscoverMedia,
    },
  };
}

function setNewDiscoverMediaActionCreator(DiscoverMedia) {
  return {
    type: ActionType.SET_NEWDISCOVER_MEDIA,
    payload: {
      DiscoverMedia,
    },
  };
}

function asyncSetDiscoverMedia(mediaType) {
  return async (dispatch) => {
    try {
      const DiscoverMedia = await api.getDiscoverMedia(mediaType);
      dispatch(setDiscoverMediaActionCreator(DiscoverMedia));
    } catch (error) {
      return error;
    }
  };
}
function asyncSetNewDiscoverMedia(mediaType, pageNum) {
  return async (dispatch) => {
    try {
      const NewDiscoverMedia = await api.getDiscoverMedia(mediaType, pageNum);
      dispatch(setNewDiscoverMediaActionCreator(NewDiscoverMedia));
    } catch (error) {
      return error;
    }
  };
}

export {
  ActionType,
  setDiscoverMediaActionCreator,
  asyncSetDiscoverMedia,
  setNewDiscoverMediaActionCreator,
  asyncSetNewDiscoverMedia,
};
