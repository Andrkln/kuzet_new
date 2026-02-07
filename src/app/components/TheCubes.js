`use client`
import Cube from "./Cube";
import useismobile from "../hooks/isMobile";


let img1 = "/images/kz.png";

let imgB = "/images/kk.jpg";

let img2 = "/images/home.png";

let imgP = "/images/pcar.png";

let imgBS = "/images/bs.png";

let imgF = "/images/flat.png";

let img3 = "/images/бизнес.webp";
let img4 = "/images/Race.png";
let img5 = "/images/Дом.webp";
let img6 = "/images/postgres.png";
let img7 = "/images/openai.png";
let img8 = "/images/weather.webp";  
let img9 = "/images/pshed.webp";
let img10 = "/images/datasimple.webp";
let img11 = "/images/pgroup.webp";
let img12 = "/images/smartt.webp";
let img13 = "/images/mtasks.webp";
let img14 = "/images/design.webp";
let img15 = "/images/onepage.webp";
let img16 = "/images/modern.webp";
let img17 = "/images/small.webp";
let img18 = "/images/webm.webp";
let img19 = "/images/user.webp";
let img20 = "/images/bot.webp";
let img21 = "/images/talk.webp";
let img22 = "/images/buttons.webp";
let img23 = "/images/instant.webp";
let img24 = "/images/discount.webp";
let img25 = "/images/pythonreact.webp";
let img26 = "/images/aibot.webp";
let img27 = "/images/textc.webp";
let img28 = "/images/3Dimg.webp";
let img29 = "/images/typeeffect.webp";





export const Cube1 = () => {
const ismobile = useismobile();
  const cubeDimensions = ismobile
    ? { width: 26, height: 36, depth: 26 }
    : { width: 30, height: 30, depth: 30 };
  const width = `${cubeDimensions.width}ch`;
  const height = `${cubeDimensions.height}ch`;
  const depth = `${cubeDimensions.depth}ch`;
  const halfWidth = `${cubeDimensions.width / 2}ch`;
  const halfHeight = `${cubeDimensions.height / 2}ch`;
  const halfDepth = `${cubeDimensions.depth / 2}ch`;
    const cubeFaces = [
      { color: `rgb(252, 226, 114)`, width: width, height: height, font: `16px`, transform: `rotateY(0deg) translateZ(${halfDepth})`, 
      text: `Охрана квартир`,
      TypeText:`Всего от 7000 тг в месяц...`,
      imageUrl: imgF,
      textColour: `black`,
      main_text_color: 'black',
      speed: 45,
      link: '/kvartity'

    },
      { 
      color: `
  rgb(252, 226, 114)
      `, 
      width: width, height: height, 
      font: `16px`, transform: `rotateY(180deg) translateZ(${halfDepth})`,
      text: `Охрана домов`, 
      TypeText:`От 8000 тг в месяц...`,
      imageUrl: img2,
      main_text_color: 'black',
      textColour: `black`, 
      speed: 100,
      link: '/home'
    },
      { 
      color: `
    rgb(0, 110, 255)
      `, width: depth, height: height, font: `16px`, transform: `rotateY(90deg) translateZ(${halfWidth})`, 
      text: `Охрана бизнеса`, 
      TypeText:`От 15 000 тг в месяц...`,
      imageUrl: imgBS,
      main_text_color: 'white',
      textColour: `white`, 
      speed: 90,
      link: '/business'
    },
      { 

      color: `rgb(0, 110, 255)`, 
      width: depth, height: height, 
      font: `16px`, transform: `rotateY(-90deg) translateZ(${halfWidth})`, 
      text: `Особые услуги`, 
      TypeText:`Цена договорная...`,
      imageUrl: imgP,
      main_text_color: 'white',
      textColour: `white`, 
      speed: 60,
      link: '/special_service'
    },
      { color: `black`, width: width, height: depth, font: `16px`, transform: `rotateX(90deg) translateZ(${halfHeight})`, 
      speed: 100 
    
    },
      { color: `orange`, width: width, height: depth, font: `16px`, transform: `rotateX(-90deg) translateZ(${halfHeight})`,},
    ];
  
    return (
      <Cube
        faces={cubeFaces}
        dimensions={{
          width,
          containerHeight: ismobile ? `${cubeDimensions.height + 4}ch` : '32ch',
        }}
      />
    );
  };
