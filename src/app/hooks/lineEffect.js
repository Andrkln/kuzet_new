'use client'
import { useState, useEffect } from 'react';

const LineEffect = ({ text, speed = 150 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < text.length) {
          return prevIndex + 1;
        }
        return 0;
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <div>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            fontSize:"2ch",
            color: index === currentIndex ? 'rgb(73, 73, 247)' : 'white',
            transition: 'color 0.2s',
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default LineEffect;
