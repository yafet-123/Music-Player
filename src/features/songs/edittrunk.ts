import { createAsyncThunk } from '@reduxjs/toolkit';
import { Song } from './songs/types';

const editSong = createAsyncThunk(
  'songs/editSong',
  async (updatedSong: Song, { rejectWithValue }) => {
    try {
      console.log(updatedSong)
      const response = await fetch(`https://music-server-z30k.onrender.com/songs/${updatedSong.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSong),
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

export default editSong