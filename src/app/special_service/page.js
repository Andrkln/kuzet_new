'use client'
import { Text, Box } from '@chakra-ui/react';
import OfferBlock from '@/components/photoOffers';
import ChatPlace from '@/components/chatWindow';
import Header from '@/components/Header';

function HomePage() {

  let img1 = "/images/kk.jpg";

  let img2 = "/images/особыу куб.jpg";

  let img3 = '/images/особые куб.png'



  return (
    <Box
    w={'100vw'}
    >
          <Header/>
      <Text
          pt={20}
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          w={'100vw'}
>
          Особые Услуги
    </Text>

      <OfferBlock 
      image1={img2}
      image2={img1}
      image3={img3}

      text={`
        Если Вам нужна охрана на определенное количество дней 
        (охранник, мобильная группа охранников в авто), охрана мероприятия, 
        сопровождение грузов по городу мы можем организовать это.
        `}
      />
      <ChatPlace />
    </Box>
  );
}

export default HomePage;
