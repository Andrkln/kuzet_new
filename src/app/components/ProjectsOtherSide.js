import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import useismobile from "@/hooks/isMobile";

const Why_box = ({ text, img, text2 }) => {
  const ismobile = useismobile();

  return (
    <Box
      borderStyle="solid"
      borderColor="black"
      borderWidth={1}
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
      h="40ch"
    >
      {/* Use the Image component */}
      <Box
        position="relative"
        w="100%"
        height={["40vh", "30vh"]}
        overflow="hidden"
      >
        <Image
          src={img}
          alt={text}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="rgba(0, 0, 0, 0.5)"
          zIndex={0}
        />
        <Box position="relative" zIndex={1} color="white" textAlign="center">
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
          h={["2%", "7%"]}
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
      >
        {text2}
      </Box>
    </Box>
  );
};
