'use client';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

const OfferBlock = ({ text, image1, image2, image3 }) => {
    return (
        <Box pt={15}>
            <Box
                w="100%"
                p={3}
                display="flex"
                flexDirection={["column", "row"]}
                justifyContent="center"
                alignItems="center"
                gap={4}
            >
                <Box p={1} display="flex" justifyContent="center" alignItems="center">
                    <Image
                        src={image1}
                        alt='security alamty image'
                        width={250}
                        height={120}
                        sizes="(max-width: 768px) 200px, 250px"
                        style={{
                            width: "100%",
                            maxWidth: "250px",
                            height: "auto",
                        }}
                    />
                </Box>

                <Box p={1} display="flex" justifyContent="center" alignItems="center">
                    <Image
                        src={image2}
                        alt='security alamty image'
                        width={300}
                        height={150}
                        sizes="(max-width: 768px) 240px, 300px"
                        style={{
                            width: "100%",
                            maxWidth: "300px",
                            height: "auto",
                        }}
                    />
                </Box>

                <Box p={1} display="flex" justifyContent="center" alignItems="center">
                    <Image
                        src={image3}
                        width={250}
                        height={120}
                        alt='security alamty image'
                        sizes="(max-width: 768px) 200px, 250px"
                        style={{
                            width: "100%",
                            maxWidth: "250px",
                            height: "auto",
                        }}
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
                    px={2}
                >
                    {text}
                </Text>
            </Box>
        </Box>
    );
};

export default OfferBlock;
