import React, { useState } from 'react';
import styled from '@emotion/styled'


const Form = styled.div`
  width:100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10%;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr; /* Equivalent to lg:grid-cols-2 */
  }
`;

const Container = styled.div`
  position: relative;
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 0;
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

const SubmitButton = styled.button`
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

  ${({ loading }) => loading ? `
    background-color: #e5e7eb; /* Equivalent to bg-gray-200 */
    cursor: not-allowed;
  ` : `
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

const SongForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setloading] =useState(false)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Dispatch a create action here
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Input
          id="title"
          type="text"
          required
          placeholder=" "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label htmlFor="title">Title</Label>
      </Container>

      <Container>
        <Input
          id="artist"
          type="text"
          required
          placeholder=" "
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <Label htmlFor="artist">Artist</Label>
      </Container>

      <Container>
        <Input
          id="album"
          type="text"
          required
          placeholder=" "
          value={album}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label htmlFor="album">Album</Label>
      </Container>

      <Container>
        <Input
          id="genre"
          type="text"
          required
          placeholder=" "
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <Label htmlFor="genre">Genre</Label>
      </Container>

      <SubmitButton type="submit" disabled={loading}>Add Song</SubmitButton>
    </Form>
  );
};

export default SongForm;