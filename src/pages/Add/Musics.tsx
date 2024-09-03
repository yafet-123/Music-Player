import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import createSong from '../../features/songsThunks';
import { useLocation, useNavigate } from 'react-router-dom';

const TopContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
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
`;

const FormDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Container = styled.div`
  position: relative;
  margin: 10px 0px;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px 10px;
  font-size: 1rem;
  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
  color: black;
  background-color: white;
  border: 2px solid black;
  border-radius: 0.75rem;
  appearance: none;
  &:focus {
    outline: none;
    border-color: #3b82f6; /* blue-500 */
  }
  &::placeholder {
    color: transparent;
  }
`;

const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
  color: black;
  transition: all 0.3s;
  transform: translateY(-1rem) scale(0.75);
  top: 0.5rem;
  left: 0.25rem;
  z-index: 10;
  background-color: white;
  padding: 0 0.5rem;
  transform-origin: 0;
  
  ${Input}:focus + & {
    color: #3b82f6; /* blue-500 */
    transform: translateY(-1rem) scale(0.75);
  }

  ${Input}::placeholder-shown + & {
    transform: translateY(50%) scale(1);
    top: 50%;
  }
`;

const SubmitButton = styled.button<{ loading: boolean }>`
  float: right;
  margin-right: 0.5rem;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  width: 8rem;
  color: white;
  font-weight: 500;
  font-size: 1.25rem;
  padding: 1rem;
  text-align: center;
  align-items: center;

  ${({ loading }) =>
    loading
      ? `
    background-color: #f0f0f0;
    cursor: not-allowed;
  `
      : `
    background-color: #009688;
    &:hover {
      background-color: #00897b;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.25rem rgba(0, 150, 136, 0.4); /* focus:ring-4 focus:ring-[#009688] */
    }
  `}
`;

const Header = styled.h1`
  color:#11665b;
  text-align: center;
  text-transform:capitalize;
  font-size:35px;
`

const Musics: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [song, setSong] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  }; 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      console.log(song)
      await dispatch(createSong(song));
      navigate('/');
    } catch (error) {
      console.error('Error adding song:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TopContainer>
      <Header>Add Song</Header>
      <Form onSubmit={handleSubmit}>
        <FormDiv>
          <Container>
            <Input
              id="title"
              type="text"
              required
              placeholder=" "
              value={song.title}
              onChange={handleChange}
              name="title"
            />
            <Label htmlFor="title">Title</Label>
          </Container>

          <Container>
            <Input
              id="artist"
              type="text"
              required
              placeholder=" "
              value={song.artist}
              onChange={handleChange}
              name="artist"
            />
            <Label htmlFor="artist">Artist</Label>
          </Container>

          <Container>
            <Input
              id="album"
              type="text"
              required
              placeholder=" "
              value={song.album}
              onChange={handleChange}
              name="album"
            />
            <Label htmlFor="album">Album</Label>
          </Container>

          <Container>
            <Input
              id="genre"
              type="text"
              required
              placeholder=" "
              value={song.genre}
              onChange={handleChange}
              name="genre"
            />
            <Label htmlFor="genre">Genre</Label>
          </Container>

          
        </FormDiv>
        <Container>
            <Input
              id="image"
              type="text"
              required
              placeholder=" "
              value={song.image}
              onChange={handleChange}
              name="image"
            />
            <Label htmlFor="image">ImageUrl</Label>
          </Container>
        <Container>
          <SubmitButton loading={loading} disabled={loading}>
            Adding
          </SubmitButton>
        </Container>
      </Form>
    </TopContainer>
  );
};

export default Musics;
