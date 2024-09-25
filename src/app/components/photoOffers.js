import { Box, Text, VStack, } from '@chakra-ui/react';
import Image from 'next/image';


const offerBlock = (text, image1, image2, image3) {
    <VStack
    width={100}
    >
        <Image
        src={image1}
        >
        </Image>
        <Image
        src={image2}
        >
        </Image>
        <Image
        src={image3}
        >
        </Image>
        <VStack>
            <Text>
                {text}
            </Text>
        </VStack>
    </VStack>
}