import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsRequest } from '../features/songs/songsSlice';
import { RootState } from '../features/store';
import styled from "@emotion/styled";
import MusicImageCategory from './MusicImageCategory'

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <TopDiv>
      <MusicImageCategory />
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} by {song.artist}
          </li>
        ))}
      </ul>
    </TopDiv>
  );
};

export default SongList;

const TopDiv = styled.div`
  margin-top:50px;
  display:flex;
  flex-direction:column;
`




