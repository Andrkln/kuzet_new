'use client'
import React from "react";
import { Box, Heading  } from "@chakra-ui/react";
import useismobile from "@/hooks/isMobile";


let img1 = "/images/kkorgau3.jpg";

let img2 = "/images/kkorgau24.jpg"

let img3 = '/images/k_standart_enhanced.jpg'

let img4 = '/images/охрана кв куб.jpg'


import Image from "next/image";

const Why_box = ({ text, img, text2, dark = 'rgba(0, 0, 0, 0.5)' }) => {
  const ismobile = useismobile();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      w={ismobile ? "80vw" : "20vw"}
      mb="25%"
      fontSize={["200%", "120%"]}
      overflow="hidden"
      ml={[0, 8]}
      borderRadius="2.5%"
      h={'40ch'}
    >
      <Box
        position="relative"
        height={["40vh", "30vh"]}
        width="100%"
        overflow="hidden"
        borderTopLeftRadius={"2.5%"}
        borderTopRightRadius={ "2.5%"}
      >
        <Image
          src={img}
          alt={text}
          layout="fill"
          objectFit="cover"
          priority
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor={dark}
          zIndex={0}
        />
        <Box
          position="absolute"
          zIndex={1}
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
          fontWeight="bold"
          fontSize={["lg", "xl"]}
          w={'90%'}
        >
          {text}
        </Box>
      </Box>

      <Box
        w="100%"
        h={0.5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="0 0 15px rgba(255, 255, 255, 0.8)"
      >
        <Box
          bg="white"
          borderRadius={100}
          w={["20%", "4%"]}
          h={["2%", "6%"]}
          position="absolute"
          zIndex={2}
          boxShadow="0 0 15px rgba(255, 255, 255, 0.8)"
        />
      </Box>

      <Box
        wordBreak="break-word"
        alignItems="center"
        justifyContent="center"
        display="flex"
        height={["40vh", "30vh"]}
        bg="rgb(252, 223, 94)"
        w="100%"
        textAlign="center"

      >
        {text2}
      </Box>
    </Box>
  );
};



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
      h={['auto', '500']}

    >
          <Why_box 
          text="Нам доверяют даже конкуренты" 
          img={img3} 
          text2="20+ компаний выбрали нас для аутсорса охраны своих объектов" 
          dark="rgba(0, 0, 0, 0.25)"
          />
          <Why_box text="Сомневаетесь в нас? Выйдите на улицу и убедитесь сами" 
          img={img4} 
          text2="тысячи наших стикеров по всему городу показатель качества" />
          <Why_box 
          text="Залог нашего успеха" 
          img={img1} 
          text2=" профессионализм бойцов и передовое оборудование" />
          <Why_box 
          text="Более 20 лет успешной работы в Алматы и Астане" 
          img={img2} 
          text2="десятки тысяч клиентов уже выбрали нас" />
    </Box>
  );
};

export default ProjectsOtherSide;