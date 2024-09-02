import React,{useState} from 'react';
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import MusicCategory from "../assets/data/MusicCategory"
const MusicImageCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleClick = (category) => {
    // Navigate to the "About" page
    navigate({
      pathname: '/Music',
      search: `?category=${category}`
    });
  };


  return (
    <MusicCategoryDiv>
      {MusicCategory.map((item) => (
        <CardContainer key={item.id}>
          <ImageContainer>
            <Image
              alt={item.category}
              layout="fill"
              src={item.image}
              className="rounded-tr-xl rounded-tl-xl filter brightness-50"
            />
          </ImageContainer>
          <ContentOverlay>
            <Title>{item.category}</Title>
            <Description>{item.description}</Description>
            <Button onClick={() => handleClick(item.category)}>Check It Know</Button>
          </ContentOverlay>
        </CardContainer>
      ))}
    </MusicCategoryDiv>
  )
};

export default MusicImageCategory;

const MusicCategoryDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  @media (min-width: 1024px) {
    margin-left: 5rem;
    margin-right: 5rem;
  }
`

const CardContainer = styled.div`
  position: relative;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  z-index: 10;
  width: 100%;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  height: 300px;
  background-color: black;
  border-radius: 10px 10px 0 0;
  position: relative;
`;

const Image = styled.img`
  width:100%;
  height:100%;
  border-top-right-radius: 0.75rem;
  border-top-left-radius: 0.75rem; 
  filter: brightness(50%);
  border-radius: 10px 10px 0 0;
  filter: brightness(50%);
`

const ContentOverlay = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: left;
  padding: 0 12px;
  font-weight: bold;
  font-size: 2rem;
  text-transform:capitalize;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  margin-left: 12px;
  font-size: 1.125rem;
  text-align: left;
  margin-bottom: 12px;
  text-align:center;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Button = styled.button`
  margin: 0 20px;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #ff0000, #0000ff);
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #00d1bb;
    color: #1a3e58;
  }
  @media (min-width: 768px) {
    font-size: 1.125rem;
    padding: 0.75rem 1.25rem;
  }
`;

