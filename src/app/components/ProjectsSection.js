'use client'
import React, { useEffect, useMemo, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { Cube1 } from "./TheCubes";
import useIsMobile from "../hooks/isMobile";
import ProjectsOtherSide from "./ProjectsOtherSide";

const WHY_BOX_IMAGES = [
  '/images/k_standart_enhanced.jpg',
  '/images/охрана кв куб.jpg',
  '/images/kkorgau3.jpg',
  '/images/kkorgau24.jpg',
];

const ProjectsSection = () => {
  const [colors, setColors] = useState({ project: 'black', qualities: 'grey' });
  const [turn, setTurn] = useState('0');
  const [isServicesSide, setIsServicesSide] = useState(true);
  const isMobile = useIsMobile();

  const button_postion = isMobile ? `flex-end` : `center`;
  const word_length = isMobile ? 250 : 230;

  const mapContent = useMemo(() => (
    <Box
      className="flipBox2"
      w={'100%'}
      bgColor={'white'}
      backgroundColor={'white'}
      display="flex"
      justifyItems={'center'}
      alignItems={'center'}
    >
      <Card>
        <Cube1 />
      </Card>
    </Box>
  ), []);

  useEffect(() => {
    WHY_BOX_IMAGES.forEach((src) => {
      const image = new window.Image();
      image.src = src;
      image.decode?.().catch(() => {});
    });
  }, []);

  function handleColorChange() {
    const startTurn = parseInt(turn, 10);
    const endTurn = startTurn === 0 ? 180 : 0;
    const increment = startTurn < endTurn ? 5 : -5;

    function updateTurn(currentTurn) {
      if ((increment > 0 && currentTurn < endTurn) || (increment < 0 && currentTurn > endTurn)) {
        const nextTurn = currentTurn + increment;
        setTurn(nextTurn.toString());

        if (Math.abs(nextTurn) === 90) {
          setIsServicesSide((prev) => !prev);
        }

        setTimeout(() => updateTurn(nextTurn), 10);
      }
    }

    updateTurn(startTurn);

    setColors({
      project: colors.project === 'black' ? 'grey' : 'black',
      qualities: colors.qualities === 'grey' ? 'black' : 'grey',
    });
  }

  return (
    <FullScreenSection
      backgroundColor="white"
      p={8}
      spacing={8}
      minHeight={'80vh'}
    >
      <Box>
        <Box
          display={'inline-flex'}
          w={'80vw'}
          justifyContent={'space-around'}
          h={20}
        >
          <Box
            display={'flex'}
            alignItems={button_postion}
            justifyItems={'center'}
            flexDirection={'column'}
            w={'100vw'}
          >
            <Heading
              as="h5"
              id="projects-section"
              color={colors.project}
              height={10}
              w={250}
              onClick={() => handleColorChange()}
            >
              Наши услуги
            </Heading>
            <Heading
              as="h5"
              id="projects-section"
              color={colors.qualities}
              height={10}
              mt={10}
              w={word_length}
              onClick={() => handleColorChange()}
            >
              Почему мы
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box
        display={'flex'}
        alignContent={['flex-start', 'center']}
        justifyContent={['flex-start', 'center']}
        w={'80vw'}
        mt={20}
      >
        <Box
          display={'flex'}
          alignContent={'flex-start'}
          justifyContent={'flex-start'}
          sx={{
            transform: `rotateX(0deg) rotateY(${turn}deg)`,
          }}
        >
          {isServicesSide ? mapContent : <ProjectsOtherSide />}
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
