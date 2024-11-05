import { useState, useEffect } from 'react';

interface AlertProps {
  data: {
    horaActual: {
      dataHora: number;
      temperaturaC: number;
      humedadRelativa: number;
      alerta: number;
    };
  };
}

function Alert({ data }: AlertProps) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (data.horaActual.alerta > 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [data.horaActual.alerta]); // This was the line with the issue

  useEffect(() => {
    if (showAlert) {
      let msg = "";
      if (data.horaActual.alerta === 1) {
        msg = "Posibles fenómenos meteorológicos con capacidad de daño y riesgo de interrupción momentánea de actividades cotidianas.";
      } else if (data.horaActual.alerta === 2) {
        msg = "Se esperan fenómenos meteorológicos peligrosos para la sociedad, la vida, los bienes y el medio ambiente.";
      } else if (data.horaActual.alerta === 3) {
        msg = "Se esperan fenómenos meteorológicos excepcionales con potencial de provocar emergencias o desastres.";
      }

      setTimeout(() => {
        alert(msg);
      }, 2000); 
    }
  }, [showAlert, data.horaActual.alerta]);

  return null; 
}

export default Alert;