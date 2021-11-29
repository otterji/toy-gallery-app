import { call, put, all, takeLatest } from 'redux-saga/effects';
import { createAPI, fetcher, poster } from '../../hooks/requests';
import { Toast } from 'native-base';
import magazineConstans from './constants';

export function* getAllMagazineSaga() {
  const url = createAPI('/magazine');
  try {
    const { magazineList } = yield call(fetcher, url);
    yield put({
      type: magazineConstans.GET_ALL_MAGAZINE.SUCCESS,
      magazineList,
    });
  } catch (error) {
    yield Toast.show({
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({
      type: magazineConstans.GET_ALL_MAGAZINE.FAIL,
    });
  }
};

export function* getMagazineDetailSaga({ magazineId }) {
  const url = createAPI(`/magazine/${magazineId}`);
  try {
    const { magazineDetail } = yield call(fetcher, url);
    yield put({
      type: magazineConstans.GET_MAGAZINE_DETAIL.SUCCESS,
      magazineDetail,
    });
  } catch (err) {
    yield Toast.show({
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    });
    yield put({ type: magazineConstans.GET_MAGAZINE_DETAIL.FAIL });
  }
};

export default function* MagazineSaga() {
  yield all([
    takeLatest(magazineConstans.GET_ALL_MAGAZINE.REQUEST, getAllMagazineSaga),
    takeLatest(magazineConstans.GET_MAGAZINE_DETAIL.REQUEST, getMagazineDetailSaga),
  ]);
};
