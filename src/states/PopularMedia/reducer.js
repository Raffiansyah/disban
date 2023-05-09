import { ActionType } from './action';

function PopularMediaReducer(PopularMedia = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_POPULAR_MEDIA:
      return action.payload.PopularMedia;
    default:
      return PopularMedia;
  }
}

export default PopularMediaReducer;
