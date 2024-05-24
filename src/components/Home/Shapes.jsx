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
  width: 100%;
  height: 100%;
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
  { id: 1, svg: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(255, 0, 0, 0.5)" /></svg>' },
  { id: 2, svg: '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="rgba(0, 255, 0, 0.5)" /></svg>' },
  { id: 3, svg: '<svg viewBox="0 0 100 100"><polygon points="50,0 100,100 0,100" fill="rgba(0, 0, 255, 0.5)" /></svg>' },
  { id: 4, svg: '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="50" ry="25" fill="rgba(255, 165, 0, 0.5)" /></svg>' },
  { id: 5, svg: '<svg viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255, 0, 255, 0.5)" stroke-width="5" /></svg>' },
  { id: 6, svg: '<svg viewBox="0 0 100 100"><polyline points="0,100 50,0 100,100" fill="none" stroke="rgba(0, 255, 255, 0.5)" stroke-width="5" /></svg>' },
  { id: 7, svg: '<svg viewBox="0 0 100 100"><path d="M 10 80 Q 95 10 180 80 T 270 80" fill="none" stroke="rgba(128, 0, 128, 0.5)" stroke-width="5" /></svg>' },
  { id: 8, svg: '<svg viewBox="0 0 100 100"><polygon points="50,0 75,100 25,100" fill="rgba(0, 128, 128, 0.5)" /></svg>' },
  { id: 9, svg: '<svg viewBox="0 0 100 100"><rect x="25" y="25" width="50" height="50" fill="rgba(128, 0, 0, 0.5)" /></svg>' },
  { id: 10, svg: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="25" fill="rgba(128, 128, 0, 0.5)" /></svg>' },
  { id: 11, svg: '<svg viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="rgba(0, 128, 0, 0.5)" /></svg>' },
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const ShapeComponent = () => {
  return (
    <ShapeContainer>
      {Array.from({ length: 30 }).map((_, index) => {
        const shape = shapes[getRandomInt(0, shapes.length - 1)];
        return (
          <Shape
            key={index}
            size={getRandomInt(20, 50)} // Boyutları küçültüyoruz
            top={getRandomInt(0, 100)}
            left={getRandomInt(0, 100)}
            duration={getRandomInt(5, 15)}
            dangerouslySetInnerHTML={{ __html: shape.svg }}
          />
        );
      })}
    </ShapeContainer>
  );
};

export default ShapeComponent;
