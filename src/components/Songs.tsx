import React,{useState} from 'react';
import styled from "@emotion/styled";
import { useSelector, useDispatch } from 'react-redux';
import { deleteSong } from '../features/songs/songsSlice';

const Songs = ({songs, categories}) => {
  const dispatch = useDispatch();
  const handleEditSong = async (song) => {
    
  };
  const handleDelete = (id: number) => {
    dispatch(deleteSong(id));
  };
  return (
    <Container>
      <CategoriesDescreption>
        <SongCategoryImage
          src={categories[0].image}
          alt={categories[0].category}
        />
        <Title>
          {categories[0].category}
        </Title>
        <Descreption>
          {categories[0].description}
        </Descreption>
      </CategoriesDescreption>
      <SongsDiv>
        {songs.map((song) => (
          <SongsButton key={song._id}>
            <SongsImage
              src={song.image}
              alt={song.title}
            />

            <SongsDescreption>
              <SongsTitle>
                {song.title}
              </SongsTitle>

              <SongsArtist>
                {song.artist}
              </SongsArtist>
              <Button onClick={() => handleEditSong(song)}>
                Edit  
              </Button>
              <Button onClick={() => handleDelete(song._id)}>
                Delete  
              </Button> 
            </SongsDescreption>
          </SongsButton>
        ))}
      </SongsDiv>
    </Container>
  );
};

export default Songs;

const Container = styled.div`
  display:flex;
  flex-direction:column;
`

const CategoriesDescreption = styled.div`
  display:flex;
  flex-direction:column;
`

const SongsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding:10px 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const Title = styled.h1`
  color:#11665b;
  text-align: left;
  text-transform:capitalize;
  font-size:30px;
  padding:10px 15px;
`
const Descreption = styled.p`
  color:#232323;
  text-align: left;
  text-transform:capitalize;
  font-size:25px;
  padding:10px 15px;
`

const SongsButton = styled.div`
  margin-bottom:10px;
  border:none;
  background-color:transparent;
  display:flex;
  align-items:center;
  margin:10px 0px;

`
const SongCategoryImage = styled.img`
  width:100%;
  height:400px;
  background-size: cover;
  background-position: center;
`

const SongsImage = styled.img`
  width:70px;
  height:70px;
  border-radius:50%;
  background-size: cover;
  background-position: center;
  margin-right:20px;
`
const SongsDescreption = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
`

const SongsTitle = styled.h2`
  font-size:15px;
  text-transform:capitalize;
  color:#11665b;
  font-family: "Times New Roman", Times, serif;
  text-align:left;
  padding:5px 0px;
`

const SongsArtist = styled.h4`
  font-size:10px;
  text-transform:capitalize;
  color:black;
  font-family: "Times New Roman", Times, serif;
  text-align:left;
  padding:5px 0px;
`

const Button = styled.button`
  width:50%;
  margin-top:10px;
  padding:4px 0px;
  border:1px solid black;
  border-radius:10px;
  background-color:#11665b;
  color:white;
`