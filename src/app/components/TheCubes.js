`use client`
import Cube from "./Cube";
import useismobile from "../hooks/isMobile";

let img2 = "/images/home.png";
let imgP = "/images/pcar.png";
let imgBS = "/images/bs.png";
let imgF = "/images/flat.png";

const CUBE_GEOMETRY = {
  desktop: {
    faceWidth: '30ch',
    faceHeight: '30ch',
    topBottomSize: '30ch',
    depth: '15ch',
    topDepth: '15ch',
    bottomDepth: '15ch',
  },
  mobile: {
    faceWidth: '25ch',
    faceHeight: '33ch',
    topBottomSize: '25ch',
    depth: '12.5ch',
    topDepth: '16.5ch',
    bottomDepth: '16.5ch',
  },
};

export const Cube1 = () => {
  const ismobile = useismobile();
  const geometry = ismobile ? CUBE_GEOMETRY.mobile : CUBE_GEOMETRY.desktop;

  const cubeFaces = [
    {
      color: `rgb(59, 171, 59)`,
      width: geometry.faceWidth,
      height: geometry.faceHeight,
      font: `16px`,
      transform: `rotateY(0deg) translateZ(${geometry.depth})`,
      text: `Охрана квартир`,
      TypeText: `Всего от 7000 тг в месяц...`,
      imageUrl: imgF,
      textColour: `wheat`,
      speed: 45,
      link: '/kvartity'
    },
    {
      color: `rgb(0, 110, 255)`,
      width: geometry.faceWidth,
      height: geometry.faceHeight,
      font: `16px`,
      transform: `rotateY(180deg) translateZ(${geometry.depth})`,
      text: `Охрана домов`,
      TypeText: `От 8000 тг в месяц...`,
      imageUrl: img2,
      textColour: `wheat`,
      speed: 100,
      link: '/home'
    },
    {
      color: `rgb(0, 68, 255)`,
      width: geometry.faceWidth,
      height: geometry.faceHeight,
      font: `16px`,
      transform: `rotateY(90deg) translateZ(${geometry.depth})`,
      text: `Охрана бизнеса`,
      TypeText: `От 15 000 тг в месяц...`,
      imageUrl: imgBS,
      textColour: `wheat`,
      speed: 90,
      link: '/business'
    },
    {
      color: `rgb(81, 196, 148)`,
      width: geometry.faceWidth,
      height: geometry.faceHeight,
      font: `16px`,
      transform: `rotateY(-90deg) translateZ(${geometry.depth})`,
      text: `Особые услуги`,
      TypeText: `Цена договорная...`,
      imageUrl: imgP,
      textColour: `blue`,
      speed: 60,
      link: '/special_service'
    },
    {
      color: `rgb(252, 226, 114)`,
      width: geometry.topBottomSize,
      height: geometry.topBottomSize,
      font: `16px`,
      transform: `rotateX(90deg) translateZ(${geometry.topDepth})`,
      speed: 100
    },
    {
      color: `orange`,
      width: geometry.topBottomSize,
      height: geometry.topBottomSize,
      font: `16px`,
      transform: `rotateX(-90deg) translateZ(${geometry.bottomDepth})`,
    },
  ];

  return <Cube faces={cubeFaces} />;
};
