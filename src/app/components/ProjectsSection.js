'use client'
import React from "react";
import { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { Cube1 } from "./TheCubes"
import ProjectsOtherSide from "./ProjectsOtherSide";
import useIsMobile from "../hooks/isMobile";

const Map = 
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


const ProjectsSection = () => {

  const [colors, setColors] = useState({ project: 'black', qualities: 'grey' });
  const [turn, setTurn] = useState('0')
  const [widthOF, SetwidthOF] = useState('0')
  const  [Content, setContent] = useState(Map)
  const isMobile = useIsMobile();
  const button_postion = useIsMobile() ? `flex-end` : `center`;
  const word_length = useIsMobile() ? 250 : 230;

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
      minHeight={'80vh'}
    > <Box>
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
