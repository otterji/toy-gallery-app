/*
 * Auth reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import pieceConstants, { RESET_STORE } from './constants';

// The initial state of the App
export const initialState = {
  loading: true,
  pieceList: [],
  pieceDetail: {
    id: null,
    artistId: null,
    imageLink: "",
    detailImgLink: null,
    material: "",
    title: "",
    subTitle: "",
    desc: "T",
    features: "",
    artistInfo: {
      id: null,
      profileImageLink: null,
      name: "",
      nationality: ""
    }
  }
};

/* eslint-disable default-case, no-param-reassign */
const pieceReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case pieceConstants.GET_ALL_PIECES.REQUEST:
        draft.loading = true;
        break;
      case pieceConstants.GET_ALL_PIECES.SUCCESS:
        draft.loading = false;
        draft.pieceList = action.pieceList;
        break;
      case pieceConstants.GET_ALL_PIECES.FAIL:
        draft.loading = false;
        break;

      case pieceConstants.GET_PIECE_DETAIL.REQUEST:
        draft.loading = true;
        break;
      case pieceConstants.GET_PIECE_DETAIL.SUCCESS:
        draft.loading = false;
        draft.pieceDetail = action.pieceDetail;
        break;
      case pieceConstants.GET_PIECE_DETAIL.FAIL:
        draft.loading = false;
        break;

      case RESET_STORE:
        draft.loading = false;
        break;
    }
  });
export default pieceReducer;
