import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchSongsRequest, fetchSongsSuccess, fetchSongsFailure } from './songsSlice';

function* fetchSongs() {
  try {
    const response = yield call(axios.get, '/api/songs');
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

export function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongs);
}
