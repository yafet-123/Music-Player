import React,{useState} from 'react';
import styled from "@emotion/styled";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import deleteSong from '../features/deleteThunks';

const Songs = ({songs, categories}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditSong = async (song) => {
    navigate(`/Edit/Music?id=${song._id}`);
  };
  
  const handleDelete = async (id: number) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this song?");
    if (isConfirmed) {
      try {
        await dispatch(deleteSong(id));
        window.location.reload(); // Refreshes the page after deletion
      } catch (error) {
        console.error('Failed to delete the song:', error);
      }
    }
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
              <ButtonDiv>
                <Button onClick={() => handleEditSong(song)}>
                  Edit  
                </Button>
                <Button onClick={() => handleDelete(song._id)}>
                  Delete  
                </Button> 
              </ButtonDiv>
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
  background-color:#f2f3f5;
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
  background-color:#232323;
  padding:20px 10px;
  border:1px solid #232323;
  border-radius:10px;
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
  color:#fff;
  font-family: "Times New Roman", Times, serif;
  text-align:left;
  padding:5px 0px;
`

const SongsArtist = styled.h4`
  font-size:15px;
  text-transform:capitalize;
  color:black;
  font-family: "Times New Roman", Times, serif;
  text-align:left;
  padding:5px 0px;
  color:#fff;
`

const Button = styled.button`
  width:25%;
  margin-top:10px;
  padding:10px 0px;
  border:1px solid black;
  border-radius:10px;
  background-color:#11665b;
  color:white;
`

const ButtonDiv = styled.div`
  display:flex;
  justify-content:space-between;
  align-content:center;
`