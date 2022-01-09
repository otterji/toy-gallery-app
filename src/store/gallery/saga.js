import { call, put, all, takeLatest } from 'redux-saga/effects';
import { createAPI, deleter, fetcher, poster } from '../../hooks/requests';
import { Toast } from 'native-base';
import galleryConstants from './constants';

export function* getMyGallerySaga() {
  const url = createAPI('/gallery');
  try {
    const { myGalleryList } = yield call(fetcher, url);
    yield put({
      type: galleryConstants.GET_MY_GALLERY_LIST.SUCCESS,
      myGalleryList: myGalleryList,
    });
  } catch (error) {
    yield Toast.show({
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({
      type: galleryConstants.GET_MY_GALLERY_LIST.FAIL,
    });
  }
};

export function* getGalleryDetailSaga({ galleryId }) {
  const url = createAPI(`/gallery/${galleryId}`);
  try {
    const { galleryDetail } = yield call(fetcher, url);
    yield put({
      type: galleryConstants.GET_GALLERY_DETAIL.SUCCESS,
      galleryDetail: galleryDetail,
    });
  } catch (error) {
    yield Toast.show({
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({
      type: galleryConstants.GET_GALLERY_DETAIL.FAIL,
    });
  }
};

export function* postGalleryGroupSaga({ name, desc }) {
  const url = createAPI('/gallery');
  const body = {
    name,
    desc
  }
  try {
    yield call(poster, { url, body });
    yield put({
      type: galleryConstants.POST_GALLERY_GROUP.SUCCESS,
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
    yield put({ type: galleryConstants.POST_GALLERY_GROUP.FAIL });
  }
};

export function* postGalleryPieceSaga({ pieceId, galleryId }) {
  const url = createAPI('/gallery/piece');
  const body = {
    pieceId,
    galleryId
  }
  try {
    yield call(poster, { url, body });
    yield put({
      type: galleryConstants.POST_GALLERY_PIECE.SUCCESS,
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
    yield put({ type: galleryConstants.POST_GALLERY_PIECE.FAIL });
  }
};

export function* updateGalleryGroupSaga({ galleryId, name, desc }) {
  const url = createAPI(`/gallery/${galleryId}`);
  const body = {
    name,
    desc
  }
  try {
    yield call(fetcher, { url, body });
    yield put({
      type: galleryConstants.UPDATE_GALLERY_GROUP.SUCCESS,
    });
    yield Toast.show({
      title: 'Successfully updated! :)',
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
    yield put({ type: galleryConstants.UPDATE_GALLERY_GROUP.FAIL });
  }
}

export function* deleteGalleryGroupSaga({ galleryId }) {
  const url = createAPI(`/gallery/${galleryId}`);
  try {
    yield call(deleter, { url });
    yield put({
      type: galleryConstants.DELETE_GALLERY_GROUP.SUCCESS,
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
    yield put({ type: galleryConstants.DELETE_GALLERY_GROUP.FAIL });
  }
};

export function* deleteGalleryPieceSaga({ pieceId, galleryId }) {
  const url = createAPI(`/gallery/piece`);
  const body = {
    pieceId,
    galleryId
  }
  try {
    yield call(deleter, { url, body });
    yield put({
      type: galleryConstants.DELETE_GALLERY_PIECE.SUCCESS,
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
    yield put({ type: galleryConstants.DELETE_GALLERY_PIECE.FAIL });
  }
};

export default function* gallerySaga() {
  yield all([
    takeLatest(galleryConstants.GET_MY_GALLERY_LIST.REQUEST, getMyGallerySaga),
    takeLatest(galleryConstants.GET_GALLERY_DETAIL.REQUEST, getGalleryDetailSaga),
    takeLatest(galleryConstants.POST_GALLERY_GROUP.REQUEST, postGalleryGroupSaga),
    takeLatest(galleryConstants.POST_GALLERY_PIECE.REQUEST, postGalleryPieceSaga),
    takeLatest(galleryConstants.UPDATE_GALLERY_GROUP.REQUEST, updateGalleryGroupSaga),
    takeLatest(galleryConstants.DELETE_GALLERY_GROUP.REQUEST, deleteGalleryGroupSaga),
    takeLatest(galleryConstants.DELETE_GALLERY_PIECE.REQUEST, deleteGalleryPieceSaga),
  ]);
};
