import React from 'react';
import SongList from '../components/SongList';
import styled from '@emotion/styled'
import HeroSection from "../components/HeroSection"
import { useLocation } from 'react-router-dom';

const Music: React.FC = () => {
  const location = useLocation();

  // Parse query string to an object
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  return (
    <div>
      <SongList category={category} />
    </div>
  );
};

export default Music;
