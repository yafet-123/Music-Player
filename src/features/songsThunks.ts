import { createAsyncThunk } from '@reduxjs/toolkit';
import { Song } from './songs/types';

const createSong = createAsyncThunk(
  'songs/createSong',
  async (song: Song, { rejectWithValue }) => {
    try {
      console.log(song)
      const response = await fetch('https://music-server-z30k.onrender.com/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(song),
      });
      if (!response.ok) {
        throw new Error('Failed to create song');
      }
      const data = await response.json();
      return data as Song;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default createSong