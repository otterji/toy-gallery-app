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
  resetLoading: true,
  artistLoading: true,
  pieceList: [],
  pieceDetail: {
    id: null,
    artistId: null,
    imageLink: "",
    detailImgLink: null,
    material: "",
    title: "",
    subTitle: "",
    desc: "",
    features: "",
    artistInfo: {
      id: null,
      profileImageLink: null,
      name: "",
      nationality: ""
    },
    year: '',
  },
  artistDetail: {
    id: null,
    profileImageLink: '',
    name: '',
    nationality: '',
    desc: '',
    pieceList: []
  },
  hasAdded: false,
  artistList: [],
  favArtistList: [],
  postExLoading: true,
  galistLoading: true,
  galleryList: [],
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

      case pieceConstants.GET_ALL_ARTISTS.REQUEST:
        draft.artistLoading = true;
        break;
      case pieceConstants.GET_ALL_ARTISTS.SUCCESS:
        draft.artistLoading = false;
        draft.artistList = action.artistList;
        break;
      case pieceConstants.GET_ALL_ARTISTS.FAIL:
        draft.artistLoading = false;
        break;

      case pieceConstants.GET_ALL_GALLERY.REQUEST:
        draft.galistLoading = true;
        break;
      case pieceConstants.GET_ALL_GALLERY.SUCCESS:
        draft.galistLoading = false;
        draft.galleryList = action.galleryList;
        break;
      case pieceConstants.GET_ALL_GALLERY.FAIL:
        draft.galistLoading = false;
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

      case pieceConstants.GET_ARTIST_DETAIL.REQUEST:
        draft.loading = true;
        break;
      case pieceConstants.GET_ARTIST_DETAIL.SUCCESS:
        draft.loading = false;
        draft.artistDetail = action.artistDetail;
        draft.hasAdded = action.hasAdded;
        break;
      case pieceConstants.GET_ARTIST_DETAIL.FAIL:
        draft.loading = false;
        break;

      case pieceConstants.POST_ARTIST_FAVORITE.REQUEST:
        draft.loading = true;
        break;
      case pieceConstants.POST_ARTIST_FAVORITE.SUCCESS:
        draft.loading = false;
        break;
      case pieceConstants.POST_ARTIST_FAVORITE.FAIL:
        draft.loading = false;
        break;

      case pieceConstants.POST_EXHIBITION.REQUEST:
        draft.postExLoading = true;
        break;
      case pieceConstants.POST_EXHIBITION.SUCCESS:
        draft.postExLoading = false;
        break;
      case pieceConstants.POST_EXHIBITION.FAIL:
        draft.postExLoading = false;
        break;

      case RESET_STORE:
        draft.resetLoading = false;
        draft.pieceList = [];
        draft.pieceDetail = initialState.pieceDetail;
        break;
    }
  });
export default pieceReducer;
