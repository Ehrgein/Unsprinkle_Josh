import React from "react";
import styled from "styled-components/macro";

const Hero = () => {
  return (
    <Wrapper>
      <Picture>
        <Source
          type="image/avif"
          srcSet="/images/hero-img.avif 1x,
           /images/hero-img@2x.avif 2x,
           /images/hero-img@3x.avif 3x,
          "
        />
        <Source
          type="image/jpg"
          srcSet="/images/hero-img.jpg 1x,
           /images/hero-img@2x.jpg 2x,
           /images/hero-img@3x.jpg 3x,
          "
        />
        <HeroImage
          src="/images/hero-img.jpg"
          alt="hero image of a tabby cat with light gray eyes staring towards you"
        />
      </Picture>
      <Swoop src="/swoop.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const Picture = styled.picture``;

const Source = styled.source``;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
