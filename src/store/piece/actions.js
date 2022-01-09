import pieceConstants, { RESET_STORE } from "./constants";

const pieceActions = {
  getAllPieces: () => ({
    type: pieceConstants.GET_ALL_PIECES.REQUEST,
  }),
  getAllArtists: () => ({
    type: pieceConstants.GET_ALL_ARTISTS.REQUEST,
  }),
  getAllGallery: () => ({
    type: pieceConstants.GET_ALL_GALLERY.REQUEST,
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
  getArtistFavorite: ({ artistId }) => ({
    type: pieceConstants.GET_ARTIST_FAVORITE.REQUEST,
    artistId,
  }),
  deleteArtistFavorite: ({ artistId }) => ({
    type: pieceConstants.DELETE_ARTIST_FAVORITE.REQUEST,
    artistId,
  }),
  postExhibition: ({ name, desc }) => ({
    type: pieceConstants.POST_EXHIBITION.REQUEST,
    name,
    desc,
  }),
  resetStore: () => ({
    type: RESET_STORE
  }),
};

export default pieceActions;