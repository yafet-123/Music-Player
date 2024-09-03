import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { 
  fetchSongsRequest, 
  fetchSongsSuccess, 
  fetchSongsFailure,
  fetchSongsRequestStatus,
  fetchSongsSuccessStatus,
  fetchSongsFailureStatus
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
    console.log(response.data)
    yield put(fetchSongsSuccessStatus(response.data));
  } catch (error) {
    yield put(fetchSongsFailureStatus(error.message));
  }
}

export function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongs);
  yield takeLatest(fetchSongsRequestStatus.type, fetchStatus);
}
