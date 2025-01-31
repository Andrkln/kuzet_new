'use client'
import React from "react";
import { Box, Heading  } from "@chakra-ui/react";
import useismobile from "@/hooks/isMobile";


let img1 = "/images/kkorgau3.jpg";



const Why_box = ({ text, img, text2 }) => {

  const ismobile = useismobile()

    return (
      <Box
        borderStyle={'solid'}
        borderColor={'black'}
        borderWidth={1}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        w={ismobile ? '80vw' : '20vw'}
        mb={'25%'}
        fontSize={['200%', '120%']}
        overflow="hidden"
        ml={[0,8]}
        borderRadius={'2.5%'}
        >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundSize="cover"
                backgroundImage={`url(${img})`}
                height={['40vh', '30vh']}
                w="100%"
                color="white"
                position="relative"
                _before={{
                  content: `""`,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 0,
                }}
                zIndex={1}
              >
                <Box 
                position="relative" 
                zIndex={1}
                textAlign={'center'}
                wordBreak={'break-word'}
                >
                  {text}
                </Box>
              </Box>
          
          <Box
          w={'100%'}
          h={0.5}
          display={'flex'}
          justifyContent={'center'}
          alignItems="center"
          boxShadow="0 0 15px rgba(255, 255, 255, 0.8)"
          >
            <Box
            bg={'white'}
            borderRadius={100}
            w={['20%','4%']}
            h={['2%', '6%']}
            position={'absolute'}
            zIndex={2}
            boxShadow="0 0 15px rgba(255, 255, 255, 0.8)"
            >

            </Box>
          </Box>
          

          <Box
             wordBreak={'break-word'}
             alignItems={'center'}
             justifyContent={'center'}
             display={'flex'}
             height={['40vh', '30vh']}
             bg={'rgb(252, 223, 94)'}
             w={'100%'}
             textAlign={'center'}
        >
              {text2}
          </Box>
      </Box>
    )
}


const ProjectsOtherSide = () => {

  const ismobile = useismobile()

  return (
    <Box
      className="QualityBox"
      transform="rotateX(0deg) rotateY(180deg) !important"
      display="flex"
      justifyContent={'space-around'}
      width="100%"
      flexDirection={ismobile ? 'column' : 'raw'}
      h={'80ch'}
    >
        
          <Why_box 
          text="Нам доверяют даже конкуренты" 
          img={img1} 
          text2="20+ компаний выбрали нас для аутсорса охраны своих объектов" />
          <Why_box text="Сомневаетесь в нас? Выйдите на улицу и убедитесь сами" 
          img={img1} 
          text2="тысячи наших стикеров по всему городу показатель качества" />
          <Why_box 
          text="Залог нашего успеха" 
          img={img1} 
          text2=" профессионализм бойцов и передовое оборудование" />
          <Why_box 
          text="Более 20 лет успешной работы в Алматы и Астане" 
          img={img1} 
          text2="десятки тысяч клиентов уже выбрали нас" />
    </Box>
  );
};

export default ProjectsOtherSide;