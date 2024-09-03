import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { SongsState, Song } from './types';
import createSong from '../songsThunks'; // Import the thunk
import editSong from './edittrunk'
import deleteSong from "../deleteThunks"
import axios from 'axios'

const initialState: SongsState = {
  songs: [],
  loading: false,
  error: null,
}; 

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    // Synchronous reducers
    fetchSongsRequest(state) {
      state.loading = true;
    },
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    fetchSongsRequestStatus(state) {
      state.loading = true;
    },
    fetchSongsSuccessStatus(state, action: PayloadAction<any>) {
      state.status = action.payload;
      state.loading = false;
    },
    fetchSongsFailureStatus(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSong.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSong.fulfilled, (state, action: PayloadAction<Song>) => {
        state.songs.push(action.payload);
        state.loading = false;
      })
      .addCase(createSong.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(editSong.pending, (state) => {
        state.loading = true;
      })
      .addCase(editSong.fulfilled, (state, action) => {
        state.loading = false;
        const song = action.payload;
        const index = state.songs.findIndex(song => song._id === song._id);
        if (index !== -1) {
          state.songs[index] = song;
        }
        state.error = null;
      })
      .addCase(editSong.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to edit song';
      })
      .addCase(deleteSong.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSong.fulfilled, (state, action) => {
        state.songs = state.songs.filter(song => song._id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteSong.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
  },
});

export const selectSongById = (state: { songs: SongsState }, songId: number) =>
  state.songs.songs.find(song => song._id === songId);

export const { 
  fetchSongsRequest, 
  fetchSongsSuccess, 
  fetchSongsFailure,
  fetchSongsRequestStatus, 
  fetchSongsSuccessStatus, 
  fetchSongsFailureStatus
} = songsSlice.actions;

export default songsSlice.reducer;