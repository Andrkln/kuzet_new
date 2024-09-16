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
      backgroundColor="rgb(98, 250, 131)"
      flexGrow={2}
      className={'IntroH'}
    ><div
     className="place"
    ></div>
      <Heading as='h1' size='4xl'
      color={'blue'}
      >
        <b>
        Кузет Коргау
          </b>
      </Heading>
      <Self
        title='Мир вашему дому !'
        description='Получить скидку'
        imageSrc={imgSrc}
      />
    </FullScreenSection>
  );
};

export default LandingSection;
