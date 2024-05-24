import React from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const ShapeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

const Shape = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  animation: ${move} ${({ duration }) => duration}s ease-in-out infinite;
`;

const shapes = [
  { id: 1, svg: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="rgba(100, 149, 237, 0.7)" /></svg>' }, // Mikroskop bakışından bir hücre
  { id: 2, svg: '<svg viewBox="0 0 100 100"><rect x="25" y="25" width="50" height="50" fill="rgba(60, 179, 113, 0.7)" /></svg>' }, // Mikroskop slide
  { id: 3, svg: '<svg viewBox="0 0 100 100"><path d="M50 5 L15 90 H85 Z" fill="rgba(255, 160, 122, 0.7)" /></svg>' }, // DNA sarmalı üstten görünüm
  { id: 4, svg: '<svg viewBox="0 0 100 100"><path d="M50 0 L75 100 L25 100 Z" fill="rgba(255, 218, 185, 0.7)" /></svg>' }, // Biyomedikal sembol
  { id: 5, svg: '<svg viewBox="0 0 100 100"><path d="M20 80 C40 10, 60 10, 80 80" fill="none" stroke="rgba(135, 206, 235, 0.7)" stroke-width="10" /></svg>' }, // Kalp ritmi eğrisi
  { id: 6, svg: '<svg viewBox="0 0 100 100"><polygon points="50,15 90,85 10,85" fill="rgba(192, 192, 192, 0.7)" /></svg>' }, // Üçgen şekil
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const ShapeComponent = () => {
  return (
    <ShapeContainer>
      {Array.from({ length: 20 }).map((_, index) => {
        const shape = shapes[getRandomInt(0, shapes.length - 1)];
        return (
          <Shape
            key={index}
            size={getRandomInt(20, 50)}
            top={getRandomInt(0, 90)}  // Boşlukları azaltmak için üst sınırı 90 yaptık
            left={getRandomInt(0, 90)} // Boşlukları azaltmak için sol sınırı 90 yaptık
            duration={getRandomInt(5, 15)}
            dangerouslySetInnerHTML={{ __html: shape.svg }}
          />
        );
      })}
    </ShapeContainer>
  );
};

export default ShapeComponent;
