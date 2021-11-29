import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import pieceReducer from './piece/reducer';
import magazineReducer from './magazine/reducer';
import authSaga from './auth/saga';
import pieceSaga from './piece/saga';
import MagazineSaga from './magazine/saga';

export const rootReducer = combineReducers({
  authReducer: authReducer,
  pieceReducer: pieceReducer,
  magazineReducer: magazineReducer,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    pieceSaga(),
    MagazineSaga(),
  ]);
}