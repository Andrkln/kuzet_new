'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack, Link } from "@chakra-ui/react";
import LineEffect from "../hooks/lineEffect";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const socials = [
  {
    icon: faPhone,
    url: "tel:+77719333330",
    colour: "grey",
  },
  {
    icon: faWhatsapp,
    url: "https://api.whatsapp.com/send?phone=77717428622",
    colour: "rgb(4,170,109)",
  },
  {
    icon: faTelegram,
    url: "https://t.me/AlmatyKuzetBot/",
    colour: "rgb(68,141,252)",
  },
];

const Header = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="translateY(0)"
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
      zIndex="10"
    >
      <Box color="white" maxWidth="100%" px={3} py={3}>
        <HStack justifyContent="space-between">
          <nav>
            <HStack spacing={6}>
              <Link
                textDecoration="none"
                fontSize="2ch"
                ml={8}
                href="https://maps.app.goo.gl/VSWCeybcsamaiAxq9"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <LineEffect text="Каирбекова 68" />
              </Link>
            </HStack>
          </nav>

          {/* Right Side - Social Links */}
          <nav>
            <HStack spacing={[4, 6]} mr={10}>
              {socials.map((social) => (
                <Link
                  key={social.url}
                  href={social.url}
                  isExternal
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: social.colour,
                    },
                  }}
                  aria-label={`Link to ${social.url}`}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    size={'2x'}
                  />
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
