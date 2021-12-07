import { call, put, all, takeLatest } from 'redux-saga/effects';
import { createAPI, poster, setItemToAsync, fetcher, removeItemToAsync } from '../../hooks/requests';
import authConstants, { RESET_STORE } from './constants';
import * as RootNavigation from '../../navigation/route';
import { Toast } from 'native-base';

export function* postRegisterSaga({ email, password, nickname }) {
  const url = createAPI('/auth/register');
  try {
    const { token } = yield call(poster, {
      url,
      body: { email, password, nickname },
    });
    yield put({
      type: authConstants.POST_REGISTER.SUCCESS,
    });
    yield setItemToAsync('idToken', token);
    yield put({
      type: authConstants.GET_ME.REQUEST,
    });
    yield Toast.show({
      title: 'You have successfully signed up',
      placement: "top",
      status: "success",
      duration: 6000,
    });
    yield RootNavigation.replace('Main', { screen: "Landing" })
  } catch (err) {
    yield Toast.show({
      title: 'Something went wrong :(',
      placement: "top",
      status: "warning",
      duration: 6000,
    })
    yield put({ type: authConstants.POST_REGISTER.FAIL });
  }
};

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
    yield Toast.show({
      title: 'Welcome back',
      placement: "top",
      status: "success",
      duration: 6000,
    });
    yield RootNavigation.replace('Main', { screen: "Landing" })
  } catch (error) {
    yield Toast.show({
      title: 'Please check your email or password',
      placement: "top",
      status: "warning",
      duration: 6000,
    })
    yield put({
      type: authConstants.LOG_IN.FAIL,
    });
  }
};

export function* logOutSaga() {
  try {
    yield removeItemToAsync('idToken');
    yield put({
      type: authConstants.LOG_OUT.SUCCESS,
    });
    yield put({ type: RESET_STORE });
    yield Toast.show({
      title: 'You have successfully signed out',
      placement: "top",
      status: "success",
      duration: 6000,
    })
    yield RootNavigation.replace('Main', { screen: 'Home' });
  } catch (error) {
    yield put({
      type: authConstants.LOG_OUT.FAIL,
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
    yield setItemToAsync('userId', result.id);
  } catch (error) {
    yield put({
      type: authConstants.GET_ME.FAIL,
    });
  }
};

export function* getEmailCheckSaga({ email, password }) {
  const url = createAPI(`/auth/email?q=${email}`);
  try {
    const { isDuplicated } = yield call(fetcher, url);
    yield put({
      type: authConstants.GET_EMAIL_CHECK.SUCCESS,
      isDuplicated,
    });
    if (isDuplicated) {
      yield Toast.show({
        title: 'This email is already taken',
        placement: "top",
        status: "warning",
        duration: 6000,
      })
    }
    if (isDuplicated === false) {
      yield RootNavigation.replace('Name', { email, password });
    }
  } catch (err) {
    yield put({ type: authConstants.GET_EMAIL_CHECK.FAIL });
  }
};

export default function* authSaga() {
  yield all([
    takeLatest(authConstants.POST_REGISTER.REQUEST, postRegisterSaga),
    takeLatest(authConstants.LOG_OUT.REQUEST, logOutSaga),
    takeLatest(authConstants.LOG_IN.REQUEST, logInSaga),
    takeLatest(authConstants.GET_ME.REQUEST, getMeSaga),
    takeLatest(authConstants.GET_EMAIL_CHECK.REQUEST, getEmailCheckSaga),
  ]);
};
