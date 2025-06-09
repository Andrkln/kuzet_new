'use client'
import { Box, Text, Link, VStack } from '@chakra-ui/react';
import Image from 'next/image';

const ServiceCard = ({ imageUrl, title, subtitle, link }) => (
  <Box
    borderWidth='1px'
    borderRadius='md'
    overflow='hidden'
    w='100%'
    maxW='400px'
    bg='white'
  >
    <Link href={link}>
      <Image src={imageUrl} alt={title} width={400} height={200} style={{ width: '100%', height: 'auto' }} />
      <Box p={4}>
        <Text fontWeight='bold'>{title}</Text>
        <Text fontSize='sm'>{subtitle}</Text>
      </Box>
    </Link>
  </Box>
);

const ServiceCards = () => {
  const cards = [
    { title: 'Охрана квартир', subtitle: 'Всего от 7000 тг в месяц...', imageUrl: '/images/flat.png', link: '/kvartity' },
    { title: 'Охрана домов', subtitle: 'От 8000 тг в месяц...', imageUrl: '/images/home.png', link: '/home' },
    { title: 'Охрана бизнеса', subtitle: 'От 15 000 тг в месяц...', imageUrl: '/images/bs.png', link: '/business' },
    { title: 'Особые услуги', subtitle: 'Цена договорная...', imageUrl: '/images/pcar.png', link: '/special_service' },
  ];
  return (
    <VStack w='100%' spacing={4}>
      {cards.map((card, index) => (
        <ServiceCard key={index} {...card} />
      ))}
    </VStack>
  );
};

export default ServiceCards;
