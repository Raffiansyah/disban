import { ActionType } from './action';

function DetailMediaReducer(DetailMedia = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_DETAIL_MEDIA:
      return action.payload.DetailMedia;
    default:
      return DetailMedia;
  }
}

export default DetailMediaReducer;
