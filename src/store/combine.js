import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import authSaga from './auth/saga';

export const rootReducer = combineReducers({
  authReducer: authReducer,
});

export function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}