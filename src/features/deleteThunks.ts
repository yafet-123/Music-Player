import { createAsyncThunk } from '@reduxjs/toolkit';

const deleteSong = createAsyncThunk(
  'songs/deleteSong',
  async (songId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://music-server-z30k.onrender.com/songs/${songId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete song');
      }
      return songId; // Return the ID of the deleted song
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default deleteSong;
