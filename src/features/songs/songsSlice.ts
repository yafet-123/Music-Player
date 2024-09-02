import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { SongsState, Song } from './types';
import createSong from '../songsThunks'; // Import the thunk
import editSong from './edittrunk'
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
    fetchSongsSuccessStatus(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailureStatus(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    deleteSongRequest(state) {
      state.loading = true;
    },
    deleteSongSuccess(state, action: PayloadAction<number>) {
      state.songs = state.songs.filter(song => song.id !== action.payload);
      state.loading = false;
      state.error = null;
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
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
        const updatedSong = action.payload;
        const index = state.songs.findIndex(song => song.id === updatedSong.id);
        if (index !== -1) {
          state.songs[index] = updatedSong;
        }
        state.error = null;
      })
      .addCase(editSong.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to edit song';
      })
  },
});

export const { 
  fetchSongsRequest, 
  fetchSongsSuccess, 
  fetchSongsFailure,
  fetchSongsRequestStatus, 
  fetchSongsSuccessStatus, 
  fetchSongsFailureStatus, 
  deleteSongRequest, 
  deleteSongSuccess, 
  deleteSongFailure, 
} = songsSlice.actions;

export default songsSlice.reducer;

export const deleteSong = (id: number): AppThunk => async (dispatch) => {
  try {
    dispatch(deleteSongRequest());
    const response = await axios.delete(`https://music-server-z30k.onrender.com/songs/${id}`); // Replace with your API endpoint
    dispatch(deleteSongSuccess(id));
  } catch (error) {
    dispatch(deleteSongFailure(error.message));
  }
};

export const fetchstatus = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchSongsRequestStatus());
    const response = await axios.get('https://music-server-z30k.onrender.com/songs/stats'); // Replace with your API endpoint
    dispatch(fetchSongsSuccessStatus(response.data));
  } catch (error) {
    dispatch(fetchSongsFailureStatus(error.message));
  }
};