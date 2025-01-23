import { Aleo } from 'next/font/google';
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const aleo = Aleo({
  weight: '300',
  subsets: ['cyrillic'],
  display: 'swap',
  preload: false,
});

export const metadata = {
  title: "Кузет Стандарт",
  description: `Explore my comprehensive collection of work, skills, and knowledge. Here, you'll find detailed information about my expertise in front-end development, my work experience, and more. If you have any questions, you can even ask an AI for assistance.
  Take a look around to see examples of my projects and how my front-end skills can bring your ideas to life. Whether you're interested in web development, chatbot integration, or database solutions, I'm here to help.
  Let's connect and discuss how I can contribute to your next project.`,
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Кузет Стандарт",
    description: `Explore my comprehensive collection of work, skills, and knowledge. Here, you'll find detailed information about my expertise in front-end development, my work experience, and more.`,
    images: [
      {
        url: "/images/my_photo.jpg",
        width: 400,
        height: 400,
        type: "image/jng",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={aleo.className}>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
