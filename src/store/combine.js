import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import pieceReducer from './piece/reducer';
import magazineReducer from './magazine/reducer';
import galleryReducer from './gallery/reducer';
import authSaga from './auth/saga';
import pieceSaga from './piece/saga';
import MagazineSaga from './magazine/saga';
import gallerySaga from './gallery/saga';

export const rootReducer = combineReducers({
  authReducer: authReducer,
  pieceReducer: pieceReducer,
  magazineReducer: magazineReducer,
  galleryReducer: galleryReducer,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    pieceSaga(),
    MagazineSaga(),
    gallerySaga(),
  ]);
}