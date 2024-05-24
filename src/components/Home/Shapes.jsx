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
  { id: 1, svg: '<svg viewBox="0 0 100 100"><path d="M50 15C35 0 0 20 0 50c0 20 20 40 50 50 30-10 50-30 50-50 0-30-35-50-50-35z" fill="rgba(255, 0, 0, 0.5)" /></svg>' },
  { id: 2, svg: '<svg viewBox="0 0 100 100"><path d="M50 15C35 0 0 20 0 50c0 20 20 40 50 50 30-10 50-30 50-50 0-30-35-50-50-35z" fill="rgba(255, 105, 180, 0.5)" /></svg>' },
  { id: 3, svg: '<svg viewBox="0 0 100 100"><path d="M50 15C35 0 0 20 0 50c0 20 20 40 50 50 30-10 50-30 50-50 0-30-35-50-50-35z" fill="rgba(255, 182, 193, 0.5)" /></svg>' },
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const ShapeComponent = () => {
  return (
    <ShapeContainer>
      {Array.from({ length: 15 }).map((_, index) => {
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
