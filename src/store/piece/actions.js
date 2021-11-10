import pieceConstants, { RESET_STORE } from "./constants";

const pieceActions = {
  getAllPieces: () => ({
    type: pieceConstants.GET_ALL_PIECES.REQUEST,
  }),
  getPieceDeatil: ({ pieceId }) => ({
    type: pieceConstants.GET_PIECE_DETAIL.REQUEST,
    pieceId,
  }),
  resetStore: () => ({
    type: RESET_STORE,
  }),
};

export default pieceActions;