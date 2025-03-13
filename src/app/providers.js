'use client';

import { ChakraProvider, theme } from "@chakra-ui/react";

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
