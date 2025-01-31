'use client';
import React, { useState } from 'react';
import LandingSection from "@/components/LandingSection";
import ProjectsSection from "@/components/ProjectsSection";
import ChatPlace from "@/components/chatWindow";
import Header from '@/components/Header';
import { Box, Input, Button, Text } from "@chakra-ui/react";

function App() {
  // const [password, setPassword] = useState('');
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handlePasswordSubmit = () => {
  //   const correctPassword = 'kuzet'; // Replace with your actual password
  //   if (password === correctPassword) {
  //     setIsAuthenticated(true);
  //   } else {
  //     alert('Incorrect password');
  //   }
  // };

  // if (!isAuthenticated) {
  //   return (
  //     <Box
  //       display="flex"
  //       flexDirection="column"
  //       justifyContent="center"
  //       alignItems="center"
  //       minHeight="100vh"
  //       bg="gray.100"
  //       p={4}
  //     >
  //       <Text fontSize="2xl" mb={4}>пароль</Text>
  //       <Input
  //         placeholder="пароль place"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         width="300px"
  //         mb={4}
  //       />
  //       <Button colorScheme="blue" onClick={handlePasswordSubmit}>
  //         войти
  //       </Button>
  //     </Box>
  //   );
  // }

  return (
    <>
      <main suppressHydrationWarning>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ChatPlace />
      </main>
    </>
  );
}

export default App;
