import { ActionType } from './action';

function TopRatedMediaReducer(TopRatedMedia = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_TOPRATED_MEDIA:
      return action.payload.TopRatedMedia;
    default:
      return TopRatedMedia;
  }
}

export default TopRatedMediaReducer;
