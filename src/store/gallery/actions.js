import galleryConstants, { RESET_STORE } from "./constants";

const galleryActions = {
  getMyGalleryList: () => ({
    type: galleryConstants.GET_MY_GALLERY_LIST.REQUEST,
  }),
  getGalleryDetail: ({ galleryId }) => ({
    type: galleryConstants.GET_GALLERY_DETAIL.REQUEST,
    galleryId
  }),
  postGalleryGroup: ({ name, desc }) => ({
    type: galleryConstants.POST_GALLERY_GROUP.REQUEST,
    name,
    desc,
  }),
  postGalleryPiece: ({ pieceId, galleryId }) => ({
    type: galleryConstants.POST_GALLERY_PIECE.REQUEST,
    pieceId,
    galleryId
  }),
  updateGalleryGroup: ({ name, desc, galleryId }) => ({
    type: galleryConstants.UPDATE_GALLERY_GROUP.REQUEST,
    name,
    desc,
    galleryId
  }),
  deleteGalleryGroup: ({ galleryId }) => ({
    type: galleryConstants.DELETE_GALLERY_GROUP.REQUEST,
    galleryId,
  }),
  deleteGalleryPiece: ({ pieceId, galleryId }) => ({
    type: galleryConstants.DELETE_GALLERY_PIECE.REQUEST,
    pieceId,
    galleryId
  }),
  resetStore: () => ({
    type: RESET_STORE
  }),
};

export default galleryActions;