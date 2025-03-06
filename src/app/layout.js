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
  description: "Профессиональные услуги охраны для домов, бизнеса и объектов. Быстрая реакция, круглосуточный мониторинг и лучшие сотрудники.",
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
      <body suppressHydrationWarning>
        <ChakraProvider>
        <ChatPlace />
          {children}
          </ChakraProvider>
      </body>
    </html>
  );
}
