'use client'
import { Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Self from "./self";


const imgSrc = "/images/car_kuzet.jpg";

const LandingSection = () => {

  return (
    <FullScreenSection
      justifyContent={'center'}
      alignItems="center"
      backgroundColor="rgb(252, 223, 94)"
      flexGrow={2}
      className={'IntroH'}
    ><div
     className="place"
    ></div>
      <Heading as='h1' size='4xl'
      color={'white'}
      sx={{
        textShadow: "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black"
      }}
      >
        <b>
        Кузет Коргау
          </b>
      </Heading>
      <Self
        title='Мир вашему дому !'
        imageSrc={imgSrc}
      />
    </FullScreenSection>
  );
};

export default LandingSection;
