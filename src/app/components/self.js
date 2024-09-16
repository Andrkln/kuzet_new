
'use client'
import { Box, Text, VStack } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import React from 'react';
import Image from 'next/image';
import NeonWord from "../hooks/neonText";



const circleAnimation = keyframes`
    0% {
       box-shadow: 0px 0px 0px 0px white;
    }

    25% {
        box-shadow: 5px 0px 0px 0px white;
    }

    50% {
       box-shadow: 5px 5px 0px 0px white;
    }

    75% {
       box-shadow: 5px 5px 5px 5px white;
    }

    100% {
        box-shadow: 5px 5px 10px 10px white;
    }
`;


const cornerAnimation = keyframes`
    0% {
        border-top-left-radius: 1% 50%;
    }
    12.5% {
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
    }
    25% {
        border-top-right-radius: 1% 50%;
    }
    25.001% {
        border-top-right-radius: 50% 1%;
    }
    37.5% {
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
    }
    50% {
        border-bottom-right-radius: 50% 1%;
    }
    50.001% {
        border-bottom-right-radius: 1% 50%;
    }
    62.5% {
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
    }
    75% {
        border-bottom-left-radius: 1% 50%;
    }
    75.001% {
        border-bottom-left-radius: 50% 1%;
    }
    87.5% {
        border-bottom-left-radius: 50%;
        border-top-left-radius: 50%;
    }
    100% {
        border-top-left-radius: 50% 1%;
    }
`;

const selfCss = css`
  .foo0 {
    animation-timing-function: ease-in-out;
    width: 38ch;
    height: 38ch;
  }

  .foo1 {
    content: '';
    position: static;
    width: 90%;
    height: 90%;
    z-index: 2;
    background-color: blue;
    animation: ${circleAnimation} 3.1s ease-in-out infinite;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid black 2px; 
  }

  .foo2 {
    content: '';
    position: static;
    width: 90%;
    height: 90%;
    z-index: 2;
    background-color: blue;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .foo3 {
    content: '';
    position: static;
    width: 90%;
    height: 90%;
    z-index: 2;
    background-color: red;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
    
const AnimatedBox = styled(Box)`
  ${selfCss}
`;




const Self = ({ title, description, imageSrc }) => {
    const divf = 
    <Box className='foo1' id="foo1"
    mt={20}
    >   
        <Image  
            src={imageSrc} 
            alt={title}
            width={210}
            height={210}
            className='imageClass'
            priority                    
                />
    </Box>
    return (
    <VStack spacing={4} className="me-slot"
    pb={100}
    >
        <Box
        w={'35ch'}
        >
            <AnimatedBox
            ><div className='foo0'>
                {divf}  
            </div>
            </AnimatedBox>
        </Box>
          <VStack spacing={3}
          w={80}
          h={100}
          >
                <Text fontSize="2.8vh" fontWeight="bold" color={'blue'}>
                    {title}
                </Text>
                <NeonWord text={` ${description}`} href="https://t.me/KuzetKorgau_bot/" />
                <br></br>
          </VStack>
      </VStack>
    );
  };


  export default Self;