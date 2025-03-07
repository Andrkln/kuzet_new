import { Aleo } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import ChatPlace from '@/components/chatWindow';


const aleo = Aleo({
  weight: "300",
  subsets: ["cyrillic"],
  display: "swap",
  preload: false,
});

export const metadata = {
  metadataBase: new URL("https://kuzet-standart.kz/"),
  title: "Кузет Стандарт - Стандарт безопасности",
  description: "Профессиональные услуги охраны для домов, бизнеса и объектов. Быстрая реакция, круглосуточный мониторинг и лучшие сотрудники",
  openGraph: {
    title: "Кузет Стандарт - Охрана Алматы",
    description: "Мы обеспечиваем защиту вашего дома, бизнеса и имущества с самыми быстрыми группами реагирования в городе",
    url: "https://kuzet-standart.kz",
    siteName: "Кузет Стандарт",
    images: [
      {
        url: "/images/kz.png",
        width: 1200,
        height: 630,
        alt: "Kuzet Standart Security Services",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={aleo.className}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning>
        <ChakraProvider>
          <ChatPlace />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}

