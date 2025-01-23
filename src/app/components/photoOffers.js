'use client'
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import useIsMobile from '@/hooks/isMobile';

const OfferBlock = ({ text, image1, image2, image3 }) => {
    const mobile = useIsMobile();

    return (
        <Box pt={15}>
            <Box
                w="100%"
                p={3}
                display="flex"
                flexDirection={mobile ? 'column' : 'row'} // Adjust layout for mobile
                justifyContent="center"
                alignItems="center" // Ensures vertical centering
                gap={4}
            >
                <Box 
                    p={1} 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center" // Centers each image box
                >
                    <Image
                        height={mobile ? 80 : 120}
                        width={mobile ? 200 : 250} // Responsive width
                        src={image1}
                        alt="Offer Image 1"
                        className="offerImg"
                    />
                </Box>
                <Box 
                    p={1} 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                >
                    <Image
                        height={mobile ? 80 : 120}
                        width={mobile ? 240 : 300}
                        src={image2}
                        alt="Offer Image 2"
                        className="offerImg"
                    />
                </Box>
                <Box 
                    p={1} 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"
                >
                    <Image
                        height={mobile ? 80 : 120}
                        width={mobile ? 200 : 250}
                        src={image3}
                        alt="Offer Image 3"
                        className="offerImg"
                    />
                </Box>
            </Box>
            <Box pb={5}>
                <Text
                    w="100%"
                    display="flex"
                    justifyContent="center"
                    textAlign="center"
                    wordBreak="break-word"
                    pl={2}
                    pr={2}
                >
                    {text}
                </Text>
            </Box>
        </Box>
    );
};

export default OfferBlock;
