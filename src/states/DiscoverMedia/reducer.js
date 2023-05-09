import { ActionType } from './action';

function DiscoverMediaReducer(DiscoverMedia = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_DISCOVER_MEDIA:
      return [action.payload.DiscoverMedia];
    case ActionType.SET_NEWDISCOVER_MEDIA:
      return [action.payload.DiscoverMedia, ...DiscoverMedia];
    default:
      return DiscoverMedia;
  }
}

export default DiscoverMediaReducer;
