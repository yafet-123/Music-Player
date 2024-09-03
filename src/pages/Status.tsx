import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsRequestStatus } from '../features/songs/songsSlice';
import { RootState } from '../features/store';
import styled from "@emotion/styled";
import Loader from "../components/Loading"
import MusicCategory from "../assets/data/MusicCategory"

const Status: React.FC<StatusProps> = () => {
  const dispatch = useDispatch();
  const { status, loading, error } = useSelector((state: RootState) => state.songs);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        setIsLoading(true); // Set local loading state
        await dispatch(fetchSongsRequestStatus());
      } catch (err) {
        console.error('Error fetching status:', err);
      } finally {
        setIsLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchStatusData();
  }, [dispatch]);

  if (isLoading || loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  // The rest of your component logic goes here
  console.log(status);
  return (
    <StatusDiv>
      <TopDiv>
        <Container>
          <Title>
            Total Albums
          </Title>

          <NumberSong>
            {status.totalAlbums}
          </NumberSong>
        </Container>

        <Container>
          <Title>
            Total Artists
          </Title>

          <NumberSong>
            {status.totalArtists}
          </NumberSong>
        </Container>

        <Container>
          <Title>
            Total Genres
          </Title>

          <NumberSong>
            {status.totalGenres}
          </NumberSong>
        </Container>

        <Container>
          <Title>
            Total Songs
          </Title>

          <NumberSong>
            {status.totalSongs}
          </NumberSong>
        </Container>
      </TopDiv>
      <SecondDiv>
        <Title>Songs By Genre</Title>
        {status.songsByGenre.map((genre,index)=>(
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
        {status.songsByArtist.map((artist,index)=>(
          <GenreDiv key={index}>
            <GenerTitle>
              singer : {artist._id}
            </GenerTitle>

            <Albums>
              <GenerTitle> Albums : </GenerTitle>
              {artist.albums.map((album,index)=>(
                <GenerDescreption key={index}>
                  {album} ,
                </GenerDescreption>
              ))}
            </Albums>

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
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color:#f0f0f0;
  height:100vh;
  @media (min-width: 768px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 5rem;
    padding-right: 5rem;
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
  background-color:#cccccc;
  padding:2px;
  margin-bottom:10px;
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

const Albums = styled.ul`

`