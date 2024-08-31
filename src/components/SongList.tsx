import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsRequest } from '../features/songs/songsSlice';
import { RootState } from '../features/store';
import styled from "@emotion/styled";
import MusicImageCategory from './MusicImageCategory1'
import Songs from './Songs'

const SongList: React.FC = ({category}) => {
  const dispatch = useDispatch();
  // const { songs, loading, error } = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  const songs = [
    {
      id:1,
      title:"Blinding By The Light",
      artist:"The weeknd",
      album:"After Hours",
      genre:"Hip-Hop",
      image:"../../public/image/Songs/After Hours.jpg"
    },
    {
      id:2,
      title:"After Hours",
      artist:"The weeknd",
      album:"After Hours",
      genre:"Hip-Hop",
      image:"../../public/image/Songs/After Hours.jpg"
    },
    {
      id:3,
      title:"Escape From LA",
      artist:"The weeknd",
      album:"After Hours",
      genre:"Hip-Hop",
      image:"../../public/image/Songs/After Hours.jpg"
    },
    {
      id:4,
      title:"Can't Feel My Face",
      artist:"The weeknd",
      album:"Beauty Behind The Madness",
      genre:"R and B",
      image:"../../public/image/Songs/Beauty Behind The Madness.jpeg"
    },
  ]

  const songByCategory = songs.filter(song => song.genre === category);
  console.log(songByCategory)
  return (
    <TopDiv>
      { songByCategory == 0 ? 
        <NotFound>
          There is no Music By {category} Category
        </NotFound>
        :
        <Songs songs={songByCategory} />
      }
    </TopDiv>
  );
};

export default SongList;

const TopDiv = styled.div`
  margin-top:15px;
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




