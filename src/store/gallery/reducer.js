/*
 * Auth reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import galleryConstants, { RESET_STORE } from './constants';

// The initial state of the App
export const initialState = {
  getGalGroupLoading: false,
  getGalDetailLoading: false,
  postGalGroupLoading: false,
  postGalPieceLoading: false,
  updateGalGroupLoading: false,
  deleteGalGroupLoading: false,
  deleteGalPieceLoading: false,
  myGalleryList: [],
  galleryDetail: [],
};

/* eslint-disable default-case, no-param-reassign */
const galleryReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case galleryConstants.GET_MY_GALLERY_LIST.REQUEST:
        console.log('true')
        draft.getGalGroupLoading = true;
        break;
      case galleryConstants.GET_MY_GALLERY_LIST.SUCCESS:
        console.log('false')
        draft.getGalGroupLoading = false;
        draft.myGalleryList = action.myGalleryList;
        break;
      case galleryConstants.GET_MY_GALLERY_LIST.FAIL:
        draft.getGalGroupLoading = false;
        break;

      case galleryConstants.GET_GALLERY_DETAIL.REQUEST:
        draft.getGalDetailLoading = true;
        break;
      case galleryConstants.GET_GALLERY_DETAIL.SUCCESS:
        draft.getGalDetailLoading = false;
        draft.galleryDetail = action.galleryDetail;
        break;
      case galleryConstants.GET_GALLERY_DETAIL.FAIL:
        draft.getGalDetailLoading = false;
        break;

      case galleryConstants.POST_GALLERY_GROUP.REQUEST:
        draft.postGalGroupLoading = true;
        break;
      case galleryConstants.POST_GALLERY_GROUP.SUCCESS:
        draft.postGalGroupLoading = false;
        break;
      case galleryConstants.POST_GALLERY_GROUP.FAIL:
        draft.postGalGroupLoading = false;
        break;

      case galleryConstants.POST_GALLERY_PIECE.REQUEST:
        draft.postGalPieceLoading = true;
        break;
      case galleryConstants.POST_GALLERY_PIECE.SUCCESS:
        draft.postGalPieceLoading = false;
        break;
      case galleryConstants.POST_GALLERY_PIECE.FAIL:
        draft.postGalPieceLoading = false;
        break;

      case galleryConstants.UPDATE_GALLERY_GROUP.REQUEST:
        draft.updateGalGroupLoading = true;
        break;
      case galleryConstants.UPDATE_GALLERY_GROUP.SUCCESS:
        draft.updateGalGroupLoading = false;
        break;
      case galleryConstants.UPDATE_GALLERY_GROUP.FAIL:
        draft.updateGalGroupLoading = false;
        break;

      case galleryConstants.DELETE_GALLERY_GROUP.REQUEST:
        draft.deleteGalGroupLoading = true;
        break;
      case galleryConstants.DELETE_GALLERY_GROUP.SUCCESS:
        draft.deleteGalGroupLoading = false;
        break;
      case galleryConstants.DELETE_GALLERY_GROUP.FAIL:
        draft.deleteGalGroupLoading = false;
        break;

      case galleryConstants.DELETE_GALLERY_PIECE.REQUEST:
        draft.deleteGalPieceLoading = true;
        break;
      case galleryConstants.DELETE_GALLERY_PIECE.SUCCESS:
        draft.deleteGalPieceLoading = false;
        break;
      case galleryConstants.DELETE_GALLERY_PIECE.FAIL:
        draft.deleteGalPieceLoading = false;
        break;

      case RESET_STORE:
        draft.myGalleryList = [];
        draft.galleryDetail = [];
        break;
    }
  });

export default galleryReducer;
