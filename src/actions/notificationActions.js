import * as types from './actionTypes';

export function getAllNotifications() {
  return { type: types.FETCH_ALL_NOTIFICATIONS};
}

export function updateNotification(notifications) {
  return { type: types.EDIT_NOTIFICATION, notifications};
}
