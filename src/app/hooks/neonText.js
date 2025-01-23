'use client';
import React from 'react';

const neonRedEffect = (font_size) => ({
  fontSize: font_size,
  textAlign: 'center',
  color: 'blue',
  textDecoration: 'none',
  textShadow: `
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #fff,
    0 0 20px #fff
  `,
});

const NeonRedText = ({ text, href, font_size = '2.6vh' }) => {
  return (
    <b>
      <p style={neonRedEffect(font_size)}>
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {text}
        </a>
      </p>
    </b>
  );
};

export default NeonRedText;
