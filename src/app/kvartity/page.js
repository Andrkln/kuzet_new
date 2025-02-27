'use client'
import { Text, Box } from '@chakra-ui/react';
import OfferBlock from '@/components/photoOffers';
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
          Охрана Квартир
    </Text>

      <OfferBlock 
      image1={img2}
      image2={img1}
      image3={img3}
      text={`
Среднее время прибытия 5-7 минут.
Гарантируем вам спокойствие и безопасность.
Мобильное приложение даст Вам полный контроль и оповещение, даже когда вы не дома
Кроме того, фишки умного дома предоставят дополнительные измерения безопасности 
Оборудование: Ajax, Raptor и т.д. 
Установим оборудование в течение 30 минут
        `}
      />
    </Box>
  );
}

export default HomePage;
