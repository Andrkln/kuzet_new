import { Aleo } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";


const aleo = Aleo({
  weight: "300",
  subsets: ["cyrillic"],
  display: "swap",
  preload: false,
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: "Kuzet Korgau - Security Solutions",
  description: "Providing the best security services for homes and businesses.",
  openGraph: {
    title: "Kuzet Korgau",
    description: "Your trusted security service provider.",
    url: "https://yourdomain.com",
    siteName: "Kuzet Korgau",
    images: [
      {
        url: "/images/my_photo.jpg",
        width: 1200,
        height: 630,
        alt: "Kuzet Korgau Security Services",
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
