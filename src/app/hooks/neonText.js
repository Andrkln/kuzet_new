import React from 'react';

const neonRedEffect = {
  fontSize: '2.6ch',
  textAlign: 'center',
  color: 'blue',
  textDecoration: 'none',
  transition: 'all 0.5s',
  animation: 'neonRed 1.5s ease-in-out infinite alternate',
};

const neonRedKeyframes = `
  @keyframes neonRed {
    from {
      text-shadow: 0 0 10px #fff,
                   0 0 20px  #fff,
                   0 0 30px  #fff,
                   0 0 40px  #0000FF,
                   0 0 70px  #0000FF,
                   0 0 80px  #0000FF,
                   0 0 100px #0000FF,
                   0 0 150px #0000FF;
    }
    to {
      text-shadow: 0 0 5px #fff,
                   0 0 10px #fff,
                   0 0 15px #fff,
                   0 0 20px #0000FF,
                   0 0 35px #0000FF,
                   0 0 40px #0000FF,
                   0 0 50px #0000FF,
                   0 0 75px #0000FF;
    }
  }
`;

const addKeyframes = () => {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(neonRedKeyframes, styleSheet.cssRules.length);
};

const NeonRedText = ({ text, href, font_size='2.6vh' }) => {
  React.useEffect(() => {
    addKeyframes();
  }, []);

  return (
    <b>
        <p style={neonRedEffect}>
      <a 
      fontSize={font_size}
      href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
        {text}
      </a>
    </p>
    </b>
  );
};

export default NeonRedText;
