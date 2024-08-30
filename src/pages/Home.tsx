import React from 'react';
import styled from '@emotion/styled'

import SongList from '../components/SongList';
import SongForm from '../components/SongForm';

const Home: React.FC = () => {
  return (
    <div>
      <Header>Welcome to the Song Manager</Header>
      <SongForm />
      <SongList />
    </div>
  );
};

export default Home;

const Header = styled.h1`
  color:#11665b;
  text-align: center;
  text-transform:capitalize;
  font-size:35px;
`
const HomeDiv= styled.div`
  display:flex;
  flex-direaction:column;
`
