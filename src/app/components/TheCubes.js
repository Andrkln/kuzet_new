`use client`
import Cube from "./Cube";
import useismobile from "../hooks/isMobile";


let img1 = "/images/kz.png";
let img2 = "/images/Кузет.png";
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
  const width = ismobile ? `30ch` : `30ch`;
  const z = ismobile ? `15ch` : `15ch`;
    const cubeFaces = [
      { color: `rgb(59, 171, 59)`, width: width, height: width, font: `16px`, transform: `rotateY(0deg) translateZ(${z})`, 
      text: `Защитим ваше желище`,
      TypeText:`Всего от 7000 тг в месяц`,
      imageUrl: img1,
      textColour: `wheat`, 
      speed: 45 },
      { 
      color: `
  rgb(0, 110, 255)
      `, 
      width: width, height: width, 
      font: `16px`, transform: `rotateY(180deg) translateZ(${z})`,
      text: `Охрана квартир и домов`, 
      TypeText:`От 7000 тг в месяц`,
      imageUrl: img5,
      textColour: `wheat`, 
      speed: 100 },
      { 
      color: `
  rgb(0, 68, 255)
      `, width: width, height: width, font: `16px`, transform: `rotateY(90deg) translateZ(${z})`, 
      text: `Охрана бизнеса`, 
      TypeText:`От 15 000 тг в месяц`,
      imageUrl: img3,
      textColour: `wheat`, 
      speed: 90 },
      { 

      color: `rgb(81, 196, 148)`, 
      width: width, height: width, 
      font: `16px`, transform: `rotateY(-90deg) translateZ(${z})`, 
      text: `Наш результат`, 
      TypeText:`Болеее 90 % задержаний`,
      imageUrl: img2,
      textColour: `blue`, 
      speed: 60
    },
      { color: `blue`, width: width, height: width, font: `16px`, transform: `rotateX(90deg) translateZ(${z})`, 
      text: `Only one css file`, 
      TypeText:`Styling all project`,
      imageUrl: img5,
      textColour: `rgb(245, 1, 245)`, 
      speed: 100 },
      { color: `orange`, width: width, height: width, font: `16px`, transform: `rotateX(-90deg) translateZ(${z})`,},
    ];
  
    return <Cube faces={cubeFaces} />;
  };