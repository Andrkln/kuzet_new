'use client'
import React from "react";
import { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { Cube1 } from "./TheCubes"
import Image from 'next/image';
import ProjectsOtherSide from "./ProjectsOtherSide";


const imgSrc = "/images/arrow.png";


const Map = 
  <Box
    className="flipBox2"
    w={'50vw'}
    bgColor={'white'}
    backgroundColor={'white'}
    display="grid"
    gap="20px"
    justifyItems={'space-around'}
    >
        <Card> 
          <Cube1 />
        </Card>
  </Box>


const ProjectsSection = () => {

  const [colors, setColors] = useState({ project: 'black', qualities: 'grey' });
  const [turn, setTurn] = useState('0')
  const [widthOF, SetwidthOF] = useState('0')
  const  [Content, setContent] = useState(Map)

  function handleColorChange() {
    const startTurn = parseInt(turn, 10);
    const endTurn = startTurn === 0 ? 180 : 0;
    const increment = startTurn < endTurn ? 5 : -5;
  
    function updateTurn(currentTurn) {
      if ((increment > 0 && currentTurn < endTurn) || (increment < 0 && currentTurn > endTurn)) {
        const nextTurn = currentTurn + increment;
        setTurn(nextTurn.toString());

        if (Math.abs(nextTurn) === 90) { 
          setContent(Content === Map ? <ProjectsOtherSide /> : Map);
          

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
    > <Box>
        <Box
        display={'inline-flex'}
        w={'80vw'}
        justifyContent={'space-around'}
        h={100}
        >
          <button onClick={() => handleColorChange()}>
            <Image  
              src={imgSrc} 
              alt="arrow"
              width={50}
              height={1}
              className="arrow"
            />
          </button>
                    <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyItems={'center'}
                    flexDirection={'column'}
                    w={100}
                    >
                        <Heading 
                              as="h5" id="projects-section" 
                              color={colors.project}
                              height={10}
                      
                                >
                              Наши услуги
                        </Heading>
                        <br></br>
                        <Heading 
                              as="h5" 
                              id="projects-section" 
                              color={colors.qualities}
                              height={10}
                              mt={10}
                        
                        >
                          Почему мы
                          </Heading>
                    </Box>
            <button onClick={() => handleColorChange()}>
                <Image  
                  src={imgSrc} 
                  alt="arrow"
                  width={50}
                  height={1}
                  className="arrow-back"
                />
          </button>

            </Box>
        </Box>
        <Box
        display={'flex'}
        alignContent={['flex-start','center']}
        justifyContent={['flex-start','center']}
        w={'80vw'}
        mt={20}
          > <Box
          display={'flex'}
          alignContent={'flex-start'}
          justifyContent={'flex-start'}
              sx={{
                transform: `rotateX(0deg) rotateY(${turn}deg)`,
              }}
          > 
            {Content}
          </Box>
        </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
