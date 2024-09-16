'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack, Link } from "@chakra-ui/react";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LineEffect from "../hooks/lineEffect";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";



const socials = [
  {
    icon: faPhone,
    url: "tel:+77719333330",
    colour: 'blue'
  },
  {
    icon: faWhatsapp,
    url: "https://api.whatsapp.com/send?phone=77717428622",
    colour: 'rgb(4,170, 109)'
  },
  {
    icon: faTelegram,
    url: "https://t.me/KuzetKorgau_bot/",
    colour: 'rgb(68, 141, 252)'
  },
];

const Header = () => {

  return (
    <Box
      height="6ch"
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="translateY(0)"
      transition="transform .3s ease-in-out"
      backgroundColor="#18181b"
      zIndex="10"
    >
      <Box color="white" maxWidth="100%" px={15} py={10}
        >
        <HStack justifyContent="space-between" 
        >
          <nav>
          <HStack spacing={25}>
              <Link
                  fontSize={'2ch'}
                  href="https://maps.app.goo.gl/VSWCeybcsamaiAxq9"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{
                    textDecoration: 'none',
                  }}
                  > 
                  <LineEffect
                    text={'Каирбекова 70'}
                  />
              </Link>
            </HStack>

          </nav>
        <nav>
            <HStack spacing={20}>
              {socials.map((social) => (
               <Link key={social.url} href={social.url} 
               isExternal
                    sx={{
                      color: 'white',
                      '&:hover': {
                        color: social.colour,
                      },
                    }}>
                  <FontAwesomeIcon icon={social.icon} size="2xl"/>
              </Link>
            ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;