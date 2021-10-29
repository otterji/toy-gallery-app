import { call, put, all, takeLatest } from 'redux-saga/effects';
import { createAPI, poster, setItemToAsync } from '../../hooks/requests';
import authConstants from './constants';
import * as RootNavigation from '../../navigation/route';

export function* postRegisterSaga({ email, password }) {
  const url = createAPI('/auth/register');
  try {
    const { token } = yield call(poster, {
      url,
      body: { email, password },
    });
    yield put({
      type: authConstants.POST_REGISTER.SUCCESS,
    });
    console.log(token)
    yield setItemToAsync('idToken', token);

    // yield put({
    //   type: authConstants.GET_ME.REQUEST,
    // });
    yield RootNavigation.resetRoot('Main');
  } catch (err) {
    console.log(err);
    yield put({ type: authConstants.POST_REGISTER.FAIL });
  }
}




export default function* authSaga() {
  yield all([
    takeLatest(authConstants.POST_REGISTER.REQUEST, postRegisterSaga),
  ]);
}
