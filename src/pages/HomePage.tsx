import db from '../db/main.json';

import aS from '../assets/arrows/v-s.png'
import aSE from '../assets/arrows/v-se.png'
import aSO from '../assets/arrows/v-so.png'
import aN from '../assets/arrows/v-n.png'
import aNE from '../assets/arrows/v-ne.png'
import aNO from '../assets/arrows/v-no.png'
import aO from '../assets/arrows/v-o.png'
import aE from '../assets/arrows/v-e.png'

function HomePage() {
  let temperatura: number = db.horaActual.temperaturaC;
  let humedad: number = db.horaActual.humedadRelativa;
  let viento: number = db.horaActual.viento;
  let vientoPredominante: number = db.horaActual.vientoPredominante;

  let imgUrl = ""
  switch (vientoPredominante){
    case 0: imgUrl = aSE;
    break;
    case 1: imgUrl = aS;
    break;
    case 2: imgUrl = aSO;
    break;
    case 3: imgUrl = aO;
    break;
    case 4: imgUrl = aNO;
    break;
    case 5: imgUrl = aN;
    break;
    case 6: imgUrl = aNE;
    break;
    case 7: imgUrl = aE;
    break;
  }

  let alerta = db.horaActual.alerta;
  let bgColorClass = "";
  if (alerta === 0) {
    bgColorClass = "greenCol";
  } else if (alerta === 1) {
    bgColorClass = "yellowCol";
  } else if (alerta === 2) {
    bgColorClass = "orangeCol";
  } else if (alerta === 3) {
    bgColorClass = "redCol";
  }

  return (
    <div id="page">
      <p className="flex flex-col gap-5 geist-regular text-white mt-5 text-2xl">Tiempo Actual</p>

      <p className='flex flex-col gap-5 geist-regular text-white mt-5 text-xl'>Ultima Actualización {formattedTime}</p>

      <div className={`grid grid-cols-2 gap-4 text-white border-2 border-white mt-5 ${bgColorClass}`}>
        <div>Dato</div>
        <div>Valor</div>
        <div>Temperatura</div>
        <div>{temperatura}°C</div>
        <div>Humedad</div>
        <div>{humedad} %</div>
        <div>Viento</div>
        <div>{viento} km/h</div>
        <div>Viento predominante</div>
        <div className='flex justify-center'>
        <img alt="Brand" src={imgUrl} width={"30px"}/>
        </div>
      </div>

      <div className="flex flex-col gap-5 geist-regular text-white mt-20 text-2xl">Pronostico</div>
    </div>
  );
}

function formatTime(date: number): string {
  const currentDate = new Date(date);
  
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');

  const formattedTime = `${day}/${month} a las ${hours}:${minutes}hs`;

  return formattedTime;
}

const currentTime = db.horaActual.dataHora;
const formattedTime = formatTime(currentTime);


export default HomePage;