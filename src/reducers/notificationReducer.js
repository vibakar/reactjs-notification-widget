import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function NotificationReducer(state = initialState.notifications, action) {
  switch (action.type) {
    case types.FETCH_ALL_NOTIFICATIONS:
      return state;

    case types.EDIT_NOTIFICATION:
      return [
        ...action.notifications,
      ];

    default:
      return state;
  }
}
