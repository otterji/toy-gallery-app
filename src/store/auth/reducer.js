/*
 * Auth reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import authConstants from './constants';

// The initial state of the App
export const initialState = {
  loading: true,
  loginLoading: false,
  registerLoading: false,
  isDuplicated: false,
  emailCheckLoading: false,
  user: {
    id: null,
    email: ""
  },
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case authConstants.LOG_IN.REQUEST:
        draft.loginLoading = true;
        break;

      case authConstants.LOG_IN.SUCCESS:
        draft.loginLoading = false;
        break;

      case authConstants.LOG_IN.FAIL:
        draft.loginLoading = false;
        break;

      case authConstants.GET_EMAIL_CHECK.REQUEST:
        draft.emailCheckLoading = true;
        break;

      case authConstants.GET_EMAIL_CHECK.SUCCESS:
        draft.emailCheckLoading = false;
        draft.isDuplicated = action.isDuplicated;
        break;

      case authConstants.GET_EMAIL_CHECK.FAIL:
        draft.emailCheckLoading = false;
        break;

      case authConstants.GET_ME.REQUEST:
        draft.loading = true;
        break;

      case authConstants.GET_ME.SUCCESS:
        draft.loading = false;
        draft.user = action.result;
        break;

      case authConstants.GET_ME.FAIL:
        draft.loading = false;
        break;

      case authConstants.POST_REGISTER.REQUEST:
        draft.registerLoading = true;
        break;

      case authConstants.POST_REGISTER.SUCCESS:
        draft.registerLoading = false;
        break;

      case authConstants.POST_REGISTER.FAIL:
        draft.registerLoading = false;
        break;

      case authConstants.LOG_OUT.SUCCESS:
        draft.user = initialState.user;
        break;
    }
  });
export default authReducer;
