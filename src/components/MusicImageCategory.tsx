import React,{useState} from 'react';
import styled from "@emotion/styled";

const MusicImageCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const musicCategory = [
    {
      id: 1,
      image: '../../public/image/bg-1.jpg',
      category: 'pop',
    },
    {
      id: 2,
      image: '../../public/image/bg-1.jpg',
      category: 'r and b',
    },
    {
      id: 3,
      image: '../../public/image/bg-1.jpg',
      category: 'Amharic',
    },
    {
      id: 4,
      image: '../../public/image/bg-1.jpg',
      category: 'Opera',
    },
    {
      id: 5,
      image: '../../public/image/bg-1.jpg',
      category: 'House',
    },

    {
      id: 6,
      image: '../../public/image/bg-1.jpg',
      category: 'Hip-Hop',
    },
    {
      id: 7,
      image: '../../public/image/bg-1.jpg',
      category: 'Latin',
    },

    {
      id: 8,
      image: '../../public/image/bg-1.jpg',
      category: 'Rock',
    },

    {
      id: 9,
      image: '../../public/image/bg-1.jpg',
      category: 'Country',
    },
    {
      id: 10,
      image: '../../public/image/bg-1.jpg',
      category: 'Jazz',
    },
  ];

  const selectedImage = musicCategory.find((item) => item.category === selectedCategory)?.image;

  return (
    <div>
      {selectedImage && (
        <div>
          <h2>Selected Category: {selectedCategory}</h2>
          <CategoryImage 
            src={selectedImage} 
            alt={selectedCategory} 
          />
        </div>
      )}
      <MusicCategory>
        <CategoryButton>
          All
        </CategoryButton>
        {musicCategory.map((item) => (
          <CategoryButton key={item.id} onClick={() => setSelectedCategory(item.category) }>
            {item.category}
          </CategoryButton>
        ))}
      </MusicCategory>
    </div>
  );
};

export default MusicImageCategory;

const MusicCategory = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 30px;
`

const CategoryButton = styled.button`
  padding:10px 20px;
  border:1px solid #009687;
  background-color:#009687;
  color:#fff;
  font-size:15px;
  text-transform:capitalize;
  border-radius: 10px;
`

const CategoryImage = styled.image`
  width:100%;
  height:200px;
  background-size: cover;
  background-position: center;
`