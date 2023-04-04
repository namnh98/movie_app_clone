import { all, fork } from 'redux-saga/effects';
import movieSaga from '@redux-app/sagas/movie';

export default function* rootSaga() {
  yield all([fork(movieSaga)]);
}
