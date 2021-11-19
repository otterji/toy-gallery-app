import pieceConstants, { RESET_STORE } from "./constants";

const pieceActions = {
  getAllPieces: () => ({
    type: pieceConstants.GET_ALL_PIECES.REQUEST,
  }),
  getPieceDetail: ({ pieceId }) => ({
    type: pieceConstants.GET_PIECE_DETAIL.REQUEST,
    pieceId,
  }),
  getArtistDetail: ({ artistId }) => ({
    type: pieceConstants.GET_ARTIST_DETAIL.REQUEST,
    artistId,
  }),
  postArtistFavorite: ({ artistId }) => ({
    type: pieceConstants.POST_ARTIST_FAVORITE.REQUEST,
    artistId,
  }),
  resetStore: () => ({
    type: RESET_STORE
  }),
};

export default pieceActions;