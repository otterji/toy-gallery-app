import { call, put, all, takeLatest } from 'redux-saga/effects';
import { createAPI, poster, setItemToAsync, fetcher } from '../../hooks/requests';
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
    yield put({
      type: authConstants.GET_ME.REQUEST,
    });
    yield RootNavigation.navigate('Main');
  } catch (err) {
    console.log(err);
    yield put({ type: authConstants.POST_REGISTER.FAIL });
  }
}

export function* logInSaga({ email, password }) {
  const url = createAPI('/auth/login');
  try {
    const { token } = yield call(poster, {
      url,
      body: { email, password },
    });
    yield setItemToAsync('idToken', token);
    yield put({
      type: authConstants.LOG_IN.SUCCESS,
    });
    yield put({
      type: authConstants.GET_ME.REQUEST,
    });
    yield RootNavigation.navigate('/SignupCompleted')
  } catch (error) {
    console.log(error)
    yield put({
      type: authConstants.LOG_IN.FAIL,
    });
  }
}

export function* getMeSaga() {
  const url = createAPI('/auth/me');
  try {
    const { result } = yield call(fetcher, url);
    yield put({
      type: authConstants.GET_ME.SUCCESS,
      result,
    });
    console.log(result)
    yield setItemToAsync('userId', result.id);
  } catch (error) {
    console.log(error);
    yield put({
      type: authConstants.GET_ME.FAIL,
    });
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(authConstants.POST_REGISTER.REQUEST, postRegisterSaga),
    takeLatest(authConstants.LOG_IN.REQUEST, logInSaga),
    takeLatest(authConstants.GET_ME.REQUEST, getMeSaga),
  ]);
}
