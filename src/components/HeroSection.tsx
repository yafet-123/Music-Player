import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";


const Slide = styled.div`
  &.home-1 {
    background-image: url("../../public/home-1.jpg");
  }
  &.home-2 {
    background-image: url("../../public/home-2.jpg");
  }
  &.home-3 {
    background-image: url("../../public/home-3.jpg");
  }
  &.home-4 {
    background-image: url("../../public/home-4.jpg");
  }
  &.home-5 {
    background-image: url("../../public/home-5.jpg");
  }
  &.home-6 {
    background-image: url("../../public/home-6.jpg");
  }

  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding-top: 6rem;
    align-items: flex-start;
    width: 60%;
  }
`;

const HeroTitle = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 6rem;
    text-align: left;
  }
`;

const HeroMessage = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.75rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    text-align: left;
  }
`;

const CommonHeroSection = ({ Tag, Welcome_Message }) => {
  const CardHeo = [
    { id: 1, image: "home-1" },
    { id: 2, image: "home-2" },
    { id: 3, image: "home-3" },
    { id: 4, image: "home-4" },
    { id: 5, image: "home-5" },
    { id: 6, image: "home-6" },
  ];

  const settings = {
    dots: false,
    lazyLoad: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {CardHeo.map((data, index) => (
          <Slide key={index} className={`home-${data.id}`}>
            <div>
              <HeroTitle>{Tag}</HeroTitle>
            </div>
            <div>
              <HeroMessage>{Welcome_Message}</HeroMessage>
            </div>
          </Slide>
        ))}
      </Slider>
    </div>
  );
};

export default CommonHeroSection;
