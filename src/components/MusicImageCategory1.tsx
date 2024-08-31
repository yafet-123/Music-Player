import React,{useState} from 'react';
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';

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
  const musicCategory = [
    {
      id: 1,
      image: '../../public/image/bg-1.jpg',
      category: 'Pop',
      description: "Catchy, mainstream music with strong melodies and universal appeal."
    },
    {
      id: 2,
      image: '../../public/image/bg-2.jpg',
      category: 'R and B',
      description: "Rhythmic and soulful music blending elements of jazz, gospel, and blues."
    },
    {
      id: 3,
      image: '../../public/image/bg-4.jpg',
      category: 'Amharic',
      description: "Traditional and modern music from Ethiopia with lyrics in the Amharic language."
    },
    {
      id: 4,
      image: '../../public/image/bg-1.jpg',
      category: 'Opera',
      description: "Dramatic and classical music with powerful vocal performances and orchestral accompaniment."
    },
    {
      id: 5,
      image: '../../public/image/bg-5.jpg',
      category: 'House',
      description: "Electronic dance music with repetitive beats, suitable for clubs and parties."
    },
    {
      id: 6,
      image: '../../public/image/bg-1.jpg',
      category: 'Hip-Hop',
      description: "Urban music characterized by rhythmic speech, beats, and a strong cultural influence."
    },
    {
      id: 7,
      image: '../../public/image/bg-1.jpg',
      category: 'Latin',
      description: "Music originating from Latin America, known for its vibrant rhythms and melodies."
    },
    {
      id: 8,
      image: '../../public/image/bg-6.jpg',
      category: 'Rock',
      description: "Guitar-driven music with strong rhythms, often conveying rebellion and energy."
    },
    {
      id: 9,
      image: '../../public/image/bg-3.jpg',
      category: 'Country',
      description: "Music rooted in rural traditions, often telling stories about life, love, and hardship."
    },
    {
      id: 10,
      image: '../../public/image/bg-2.jpg',
      category: 'Jazz',
      description: "Improvisational music with complex harmonies, often featuring brass and woodwind instruments."
    },
  ];


  return (
    <MusicCategoryDiv>
      {musicCategory.map((item) => (
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
  border-radius: 10px 10px 0 0;
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

