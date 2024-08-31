import React, { useState } from 'react';
import styled from '@emotion/styled'

import MusicImageCategory from '../components/MusicImageCategory1';
import SongForm from '../components/SongForm';

const Home: React.FC = () => {
  const [loading, setloading] =useState(false)
  return (
    <HomeTopDiv>
      <HomeSecondDiv>
        <Header>Welcome to the Song Manager</Header>
        <AddButton type="submit" disabled={loading}>Add Song</AddButton>
      </HomeSecondDiv>
      <MusicImageCategory />
    </HomeTopDiv>
  );
};

export default Home;

const Header = styled.h1`
  color:#11665b;
  text-align: center;
  text-transform:capitalize;
  font-size:35px;
`
const HomeTopDiv= styled.div`
  display:flex;
  flex-direction:column;
  padding:0px 1.25rem;
`

const HomeSecondDiv = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const AddButton = styled.button`
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
