import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { 
  fetchSongsRequest, 
  fetchSongsSuccess, 
  fetchSongsFailure,
  fetchSongsRequestStatus,
  fetchSongsSuccessStatus,
  fetchSongsFailureStatus,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
} from './songsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Song } from './types';

function* fetchSongs() {
  try {
    const response = yield call(axios.get, 'https://music-server-z30k.onrender.com/songs');
    console.log(response.data)
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* fetchStatus() {
  try {
    const response = yield call(axios.get, 'https://music-server-z30k.onrender.com/songs/stats'); // Replace with your API endpoint
    yield put(fetchSongsSuccessStatus(response.data));
  } catch (error) {
    yield put(fetchSongsFailureStatus(error.message));
  }
}

// Worker Saga for Delete Song
function* deleteSong(action) {
  try {
    yield put(deleteSongRequest());
    const response = yield call(axios.delete, `https://music-server-z30k.onrender.com/songs/${action.payload}`); // Replace with your API endpoint
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

export function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongs);
  yield takeLatest(fetchSongsRequestStatus.type, fetchSongs);
  yield takeLatest(deleteSongRequest.type, deleteSong);
}
