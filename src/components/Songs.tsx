import React,{useState} from 'react';
import styled from "@emotion/styled";

const Songs = ({songs}) => {
  console.log(songs)
  return (
    <SongsUnorderList>
      {songs.map((song) => (
        <SongsList key={song.id}>
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
          </SongsDescreption>
        </SongsList>
      ))}
    </SongsUnorderList>
  );
};

export default Songs;

const SongsUnorderList = styled.ul`
  display:flex;
  flex-direction:column;
`

const SongsList = styled.li`
  margin-bottom:10px;
  list-style-type: none;
  display:flex;
  align-items:center;
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
`

const SongsTitle = styled.h2`
  font-size:15px;
  text-transform:capitalize;
  color:#11665b;
  font-family: "Times New Roman", Times, serif;
`

const SongsArtist = styled.h4`
  font-size:10px;
  text-transform:capitalize;
  color:black;
  font-family: "Times New Roman", Times, serif;
`