'use client'
import { Text, Box } from '@chakra-ui/react';
import OfferBlock from '@/components/photoOffers';
import Header from '@/components/Header';

function HomePage() {

  let img1 = "/images/k_bs3.jpg";

  let img2 = "/images/k_business.jpg";

  let img3 = "/images/k_bs2.jpg";

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
          Охрана Бизнеса
    </Text>

      <OfferBlock 
      image1={img2}
      image2={img3}
      image3={img1}

      text={`
Защита любых помещений от офисов до складов.
Кроме охранной сигнализации есть и другие решения в сфере безопасности: 
мобильное приложение руководителя для контроля, физические посты, системы контроля доступа, видеонаблюдение, кибербезопасность. 
Оборудование: Ajax, Raptor и т.д. 
Установим оборудование в течение 30 минут.`}
      />
    </Box>
  );
}

export default HomePage;
