import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsRequestStatus } from '../features/songs/songsSlice';
import { RootState } from '../features/store';
import styled from "@emotion/styled";
import Loader from "../components/Loading"
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
  const Genres = songs.songsByGenre
  const Artists = songs.songsByArtist
  console.log(Genres)
  return (
    <StatusDiv>
      <TopDiv>
        <Container>
          <Title>
            Total Albums
          </Title>

          <NumberSong>
            {songs.totalAlbums}
          </NumberSong>
        </Container>

        <Container>
          <Title>
            Total Artists
          </Title>

          <NumberSong>
            {songs.totalArtists}
          </NumberSong>
        </Container>

        <Container>
          <Title>
            Total Genres
          </Title>

          <NumberSong>
            {songs.totalGenres}
          </NumberSong>
        </Container>

        <Container>
          <Title>
            Total Songs
          </Title>

          <NumberSong>
            {songs.totalSongs}
          </NumberSong>
        </Container>
      </TopDiv>
      <SecondDiv>
        <Title>Songs By Genre</Title>
        {Genres.map((genre,index)=>(
          <GenreDiv key={index}>
            <GenerTitle>
              {genre._id}
            </GenerTitle>

            <GenerDescreption>
              {genre.count}
            </GenerDescreption>
          </GenreDiv>
        ))}
      </SecondDiv>
      <SecondDiv>
        <Title>Songs By Artists</Title>
        {Artists.map((artist,index)=>(
          <GenreDiv key={index}>
            <GenerTitle>
              {artist._id}
            </GenerTitle>

            <GenerDescreption>
              songs: {artist.songs}
            </GenerDescreption>
          </GenreDiv>
        ))}
      </SecondDiv>
    </StatusDiv>
  );
};

export default Status;

const StatusDiv = styled.div`
  display:flex;
  flex-direction:column;
  margin-left: 1.25rem;
  margin-right: 1.25rem;

  @media (min-width: 768px) {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  @media (min-width: 1024px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }
`

const TopDiv = styled.div`
  padding-top:20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

`

const Container = styled.h1`
  background-color:#11665b;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const Title = styled.h1`
  color:#232323;
  text-align: center;
  text-transform:capitalize;
  font-size:30px;
  padding:10px 15px;
`

const NumberSong = styled.p`
  color:white;
  text-align: left;
  text-transform:capitalize;
  font-size:25px;
  padding:10px 15px;
`

const SecondDiv = styled.div`
  display:flex;
  flex-direction:column;
`
const GenreDiv = styled.div`
  display:flex;
  justify-content:space-between;
  align-content:center;
`
const GenerTitle = styled.h1`
  color:#11665b;
  text-align: left;
  text-transform:capitalize;
  font-size:20px;
  padding:10px 15px;
`

const GenerDescreption = styled.p`
  color:#11665b;
  text-align: left;
  text-transform:capitalize;
  font-size:25px;
  padding:10px 15px;
`