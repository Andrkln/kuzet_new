import React, { useState, useRef } from 'react';
import { Box, Text, HStack, VStack } from '@chakra-ui/react';
import TypingEffect from "../hooks/TypeEffect.client";
import Image from 'next/image';
  


const Styles = ({ color, width, height, font, transform }) => ({
  position: 'absolute',
  width,
  height,
  background: color,
  border: '1px solid #ccc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: font,
  transform,
  userSelect: 'none',
});

const CubeFace = ({ color, width, height, font, transform, text, TypeText, imageUrl, speed, textColour, main_text_color='white' }) => (
  <Box sx={Styles({ color, width, height, font, transform })}
  >
    <VStack>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Cube Face"
          width="180"
          height="180"
          sizes="100vw"
        />
      )}
      {text && <Text
      color={main_text_color}
      >{text}</Text>}
      {TypeText && (
        <Text
          sx={{
            background: textColour,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {TypeText}
        </Text>
      )}
    </VStack>
  </Box>
);

const Cube = ({ faces }) => {
  const [rotation, setRotation] = useState({ rotateX: -30, rotateY: 30 });
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  const handleStart = (e) => {
    isDragging.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startPos.current = { x: clientX, y: clientY };
    e.preventDefault();
  };

  const handleMove = (e) => {
    if (isDragging.current) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - startPos.current.x;
      const deltaY = clientY - startPos.current.y;

      setRotation({
        rotateX: rotation.rotateX - deltaY / 150,
        rotateY: rotation.rotateY + deltaX / 150,
      });
      e.preventDefault();
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <HStack
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      style={{ userSelect: 'none' }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '30ch',
          height: '32ch',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
          transition: 'transform 0.1s linear',
          userSelect: 'none' 
        }}
        className="Cube"
      >
        {faces.map((face, index) => (
          <CubeFace key={index} {...face} />
        ))}
      </Box>
    </HStack>
  );
};

export default Cube;