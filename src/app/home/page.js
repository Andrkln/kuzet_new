'use client'
import { Text, Box } from '@chakra-ui/react';
import OfferBlock from '@/components/photoOffers';

function HomePage() {

  let img1 = "/images/kz.png";

  return (
    <Box>
      <Text
          pt={20}
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          w={'100vw'}
>
          Охрана Дома
    </Text>

      <OfferBlock 
      image1={img1}
      image2={img1}
      image3={img1}

      text={'lonvibhwegeiqvnrneiqrvnoieqrbbhoeqrjnevfqnjqefrjinveqrjnoeoqvjqevhbqevhojfhjofveqkjnfvkjnashobfdvahjoafvdjknfvhjhjbfvhjboefovhjbefvqhbjfvhjbfeqvojbh'}
      
      />
    </Box>
  );
}

export default HomePage;
