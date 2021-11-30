/*
 * Auth reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import magazineConstans, { RESET_STORE } from './constants';

// The initial state of the App
export const initialState = {
  resetLoading: true,
  allLoading: true,
  detailLoading: true,
  magazineList: [],
  magazineDetail: {
    id: null,
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
    coverImage: "",
  },
};

/* eslint-disable default-case, no-param-reassign */
const magazineReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case magazineConstans.GET_ALL_MAGAZINE.REQUEST:
        draft.allLoading = true;
        break;
      case magazineConstans.GET_ALL_MAGAZINE.SUCCESS:
        draft.allLoading = false;
        draft.magazineList = action.magazineList;
        break;
      case magazineConstans.GET_ALL_MAGAZINE.FAIL:
        draft.allLoading = false;
        break;

      case magazineConstans.GET_MAGAZINE_DETAIL.REQUEST:
        draft.detailLoading = true;
        break;
      case magazineConstans.GET_MAGAZINE_DETAIL.SUCCESS:
        draft.detailLoading = false;
        draft.magazineDetail = action.magazineDetail;
        break;
      case magazineConstans.GET_MAGAZINE_DETAIL.FAIL:
        draft.detailLoading = false;
        break;

      case RESET_STORE:
        draft.resetLoading = false;
        draft.magazineList = [];
        draft.magazineDetail = initialState.magazineDetail;
        break;
    }
  });
export default magazineReducer;
