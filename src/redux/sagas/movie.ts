import { getListMovieApi } from '@services/api/movie';
import { getListMovieFailure, getListMovieSuccess } from '@redux-app/actions/movie';
import { call, delay, fork, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_LIST_MOVIE } from '../actionType';

export function* getListMovieSaga(action: any) {
  const { payload } = action;
  try {
    const res = yield call(getListMovieApi, { params: payload });

    if (res) {
      yield put(getListMovieSuccess(res?.data));
    } else {
      yield put(getListMovieFailure(res));
    }
  } catch (e) {
    yield put(getListMovieFailure(e));
  }
}

function* watchUser() {
  yield takeLatest(GET_LIST_MOVIE.HANDLER, getListMovieSaga);
}

export default function* rootChild() {
  yield fork(watchUser);
}
