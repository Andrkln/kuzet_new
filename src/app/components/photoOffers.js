'use client'
import { Box, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import useIsMobile from '@/hooks/isMobile';

const OfferBlock = ({ text, image1, image2, image3 }) => {

    const mobile = useIsMobile();

    return (
        <VStack 
        display={'flex'} 
        justifyItems={'flex end'}
        pt={15}
        >
            <VStack w={80} p={3}
            >
                <Box
                p={1}
                >
                    <Image
                        height={mobile ? 80 : 40}
                        width={250}
                        src={image2}
                        alt="Offer Image 1"
                        className='offerImg'
                    />
                </Box>
                <Box
                p={1}
                >
                    <Image
                        height={mobile ? 80 : 40}
                        width={300}
                        src={image2}
                        alt="Offer Image 2"
                        className='offerImg'
                    />
                </Box>
                <Box
                p={1}
                >
                    <Image
                        height={mobile ? 80 : 40}
                        width={250}
                        src={image2}
                        alt="Offer Image 3"
                        className='offerImg'
                    />
                </Box>
            </VStack>
            <VStack
            pb={5}
            >
                <Text
                w={80}
                >
                    {text}
                </Text>
            </VStack>
        </VStack>
    );
}

export default OfferBlock;
