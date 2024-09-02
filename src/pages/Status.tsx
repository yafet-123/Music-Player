import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsRequestStatus } from '../features/songs/songsSlice';
import { RootState } from '../features/store';
import styled from "@emotion/styled";
import MusicImageCategory from './MusicImageCategory1'
import Songs from './Songs'
import Loader from "./Loading"
import MusicCategory from "../assets/data/MusicCategory"

const Status: React.FC = ({category}) => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state: RootState) => state.songs);
  console.log(songs)
  useEffect(() => {
    dispatch(fetchSongsRequestStatus());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  const songByCategory = songs.filter(song => song.genre === category);
  const categorySelected = MusicCategory.filter(songcategory => songcategory.category === category);
  console.log(categorySelected)
  return (
    <TopDiv>
      
    </TopDiv>
  );
};

export default SongList;

const TopDiv = styled.div`
  display:flex;
  flex-direction:column;
`

const NotFound = styled.h1`
  font-size:25px;
  text-transform:capitalize;
  color:#11665b;
  font-family: "Times New Roman", Times, serif;
  text-align:center;
`




