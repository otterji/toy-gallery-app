import { call, put, all, takeLatest } from 'redux-saga/effects';
import { createAPI, deleter, fetcher, poster } from '../../hooks/requests';
import { Toast, useToast } from 'native-base';
import pieceConstants from './constants';

export function* getAllArtistSaga() {
  const url = createAPI('/artist');
  try {
    const { artistList } = yield call(fetcher, url);
    const transFormedArtistList = artistList.map((x) => {
      return {
        ...x,
        value: x.name,
        key: x.id
      }
    })
    yield put({
      type: pieceConstants.GET_ALL_ARTISTS.SUCCESS,
      artistList: transFormedArtistList,
    });
  } catch (error) {
    yield Toast.show({
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({
      type: pieceConstants.GET_ALL_ARTISTS.FAIL,
    });
  }
};

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
      title: 'Something went wrong :(',
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
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({ type: pieceConstants.GET_PIECE_DETAIL.FAIL });
  }
};

export function* getAllGallerySaga() {
  const url = createAPI(`/gallery`);
  try {
    const { galleryList } = yield call(fetcher, url);
    yield put({
      type: pieceConstants.GET_ALL_GALLERY.SUCCESS,
    });
  } catch (err) {
    yield Toast.show({
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({ type: pieceConstants.GET_ALL_GALLERY.FAIL });
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
      title: 'Something went wrong :(',
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
    yield call(poster, { url, body: payload });
    yield put({
      type: pieceConstants.POST_ARTIST_FAVORITE.SUCCESS,
    });
    yield put({
      type: pieceConstants.GET_ALL_ARTISTS.REQUEST,
    });
    yield Toast.show({
      title: 'Successfully added! :)',
      placement: "top",
      status: "success",
      duration: 6000,
    });
  } catch (err) {
    console.log(err)
    yield Toast.show({
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({ type: pieceConstants.POST_ARTIST_FAVORITE.FAIL });
  }
};

export function* deleteArtistFavoriteSaga({ artistId }) {
  const url = createAPI(`/artist/favorite`);
  const payload = {
    artistId
  }
  try {
    yield call(deleter, { url, body: payload });
    yield put({
      type: pieceConstants.DELETE_ARTIST_FAVORITE.SUCCESS,
    });
    yield Toast.show({
      title: 'Successfully deleted! :)',
      placement: "top",
      status: "success",
      duration: 6000,
    });
  } catch (err) {
    console.log(err)
    yield Toast.show({
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({ type: pieceConstants.DELETE_ARTIST_FAVORITE.FAIL });
  }
};

export function* postExhibitionSaga({ name, desc }) {
  const url = createAPI(`/gallery`);
  const payload = {
    name,
    desc
  }
  try {
    yield call(poster, { url, body: payload });
    yield put({
      type: pieceConstants.POST_EXHIBITION.SUCCESS,
    });
    yield Toast.show({
      title: 'Successfully created! :)',
      placement: "top",
      status: "success",
      duration: 6000,
    });
  } catch (err) {
    yield Toast.show({
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({ type: pieceConstants.POST_EXHIBITION.FAIL });
  }
};

export default function* pieceSaga() {
  yield all([
    takeLatest(pieceConstants.GET_ALL_PIECES.REQUEST, getAllPiecesSaga),
    takeLatest(pieceConstants.GET_ALL_ARTISTS.REQUEST, getAllArtistSaga),
    takeLatest(pieceConstants.GET_ALL_GALLERY.REQUEST, getAllGallerySaga),
    takeLatest(pieceConstants.GET_PIECE_DETAIL.REQUEST, getPieceDetailSaga),
    takeLatest(pieceConstants.GET_ARTIST_DETAIL.REQUEST, getArtistDetailSaga),
    takeLatest(pieceConstants.POST_ARTIST_FAVORITE.REQUEST, postArtistFavoriteSaga),
    takeLatest(pieceConstants.POST_EXHIBITION.REQUEST, postExhibitionSaga),
    takeLatest(pieceConstants.DELETE_ARTIST_FAVORITE.REQUEST, deleteArtistFavoriteSaga),
  ]);
};
