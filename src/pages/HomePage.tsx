import db from '../db/main.json';

function HomePage() {
  let status: string[] = [];
  let temperatura: number = db.horaActual.temperaturaC;
  let humedad: number = db.horaActual.humedadRelativa;
  let presion: number = db.horaActual.presionAtm;

  if (temperatura > 30) {
    status[0] = 'Caluroso';
  } else if (temperatura < 30 && temperatura > 20) {
    status[0] = 'Moderado';
  } else if (temperatura < 20) {
    status[0] = 'Frío';
  }

  if (humedad > 70) {
    status[1] = 'Alta Humedad';
  } else if (humedad <= 70 && humedad > 40) {
    status[1] = 'Humedad Moderada';
  } else {
    status[1] = 'Baja Humedad';
  }

  if (presion > 1013) {
    status[2] = 'Alta Presión';
  } else if (presion <= 1013 && presion > 1000) {
    status[2] = 'Presión Normal';
  } else {
    status[2] = 'Baja Presión';
  }

  return (
    <div id="page">
      <p className="flex flex-col gap-5 geist-regular text-white mt-5 text-2xl">Tiempo Actual</p>

      <p className='flex flex-col gap-5 geist-regular text-white mt-5 text-xl'>Ultima Actualización {formattedTime}</p>

      <div className="grid grid-cols-3 gap-4 text-white border-2 border-white mt-5">
        <div>Dato</div>
        <div>Valor</div>
        <div>Estado</div>
        <div>Temperatura</div>
        <div>{temperatura}°C</div>
        <div style={{ backgroundColor: statusColor(status[0]) }}>{status[0]}</div>
        <div>Humedad</div>
        <div>{humedad} %</div>
        <div style={{ backgroundColor: statusColor(status[1]) }}>{status[1]}</div>
        <div>Presión Atmosférica</div>
        <div>{presion} milibares</div>
        <div style={{ backgroundColor: statusColor(status[2]) }}>{status[2]}</div>
      </div>

      <div className="flex flex-col gap-5 geist-regular text-white mt-20 text-2xl">Pronostico</div>
    </div>
  );
}

// Función para determinar el color según el estado
function statusColor(status: string): string {
  if (status === 'Baja Humedad' || status === 'Frío' || status === 'Baja Presión') {
    return 'blue'; // Azul para valores bajos
  } else if (status === 'Humedad Moderada' || status === 'Moderado' || status === 'Presión Normal') {
    return 'green'; // Verde para valores moderados
  } else {
    return 'red'; // Rojo para valores altos
  }
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