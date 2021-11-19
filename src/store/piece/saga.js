import { call, put, all, takeLatest } from 'redux-saga/effects';
import { createAPI, fetcher, poster } from '../../hooks/requests';
import { Toast, useToast } from 'native-base';
import pieceConstants from './constants';

export function* getAllPiecesSaga() {
  const url = createAPI('/piece');
  try {
    const { pieceList } = yield call(fetcher, url);
    const newPieceList = pieceList.map((x) => {
      return {
        ...x,
        pressed: false,
      }
    })
    yield put({
      type: pieceConstants.GET_ALL_PIECES.SUCCESS,
      pieceList: newPieceList,
    });
  } catch (error) {
    yield Toast.show({
      title: '정보를 불러들이는데에 오류가 발생했습니다.',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({
      type: pieceConstants.GET_ALL_PIECES.FAIL,
    });
  }
};

export function* getPieceDetailSaga({ pieceId }) {
  const url = createAPI(`/piece/${pieceId}`);
  try {
    const { pieceDetail } = yield call(fetcher, url);
    yield put({
      type: pieceConstants.GET_PIECE_DETAIL.SUCCESS,
      pieceDetail,
    });
  } catch (err) {
    yield Toast.show({
      title: '정보를 불러들이는데에 오류가 발생했습니다.',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({ type: pieceConstants.GET_PIECE_DETAIL.FAIL });
  }
};

export function* getArtistDetailSaga({ artistId }) {
  const url = createAPI(`/artist/${artistId}`);
  try {
    const { artistDetail, hasAdded } = yield call(fetcher, url);
    yield put({
      type: pieceConstants.GET_ARTIST_DETAIL.SUCCESS,
      artistDetail,
      hasAdded,
    });
  } catch (err) {
    yield Toast.show({
      title: '정보를 불러들이는데에 오류가 발생했습니다.',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({ type: pieceConstants.GET_ARTIST_DETAIL.FAIL });
  }
};

export function* postArtistFavoriteSaga({ artistId }) {
  const url = createAPI(`/artist/favorite`);
  const payload = {
    artistId
  }
  try {
    yield call(poster, { url, payload });
    yield put({
      type: pieceConstants.POST_ARTIST_FAVORITE.SUCCESS,
    });
    yield Toast.show({
      title: 'Successfully added! :)',
      placement: "top",
      status: "success",
      duration: 6000,
    });
  } catch (err) {
    yield Toast.show({
      title: 'Oops! Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({ type: pieceConstants.POST_ARTIST_FAVORITE.FAIL });
  }
};

export default function* pieceSaga() {
  yield all([
    takeLatest(pieceConstants.GET_ALL_PIECES.REQUEST, getAllPiecesSaga),
    takeLatest(pieceConstants.GET_PIECE_DETAIL.REQUEST, getPieceDetailSaga),
    takeLatest(pieceConstants.GET_ARTIST_DETAIL.REQUEST, getArtistDetailSaga),
    takeLatest(pieceConstants.POST_ARTIST_FAVORITE.REQUEST, postArtistFavoriteSaga),
  ]);
};
