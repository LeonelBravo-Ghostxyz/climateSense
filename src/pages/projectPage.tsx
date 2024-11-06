import db from '../db/thisProject.json';
import brand from '../assets/brand.png'
let proyecto = db.text;
let equipo = db.team;

function ProjectPage() {
  return (
    <>
    <img src={`${brand}`} alt="brand" className='m-auto mt-3'/>
    <div className="flex flex-col gap-5 geist-regular text-white">
      <p className="text-2xl mt-10">Este Proyecto</p>
      <p>{proyecto}</p>
      <p className='text-xl'>Integrantes del proyecto</p>

      <div className='grid grid-cols-5 border-white'>
        {Object.keys(equipo).map((key) => (
          <p key={key}>{equipo[key as keyof typeof equipo].nombre}</p>
        ))}
      </div>
    </div>
    </>
  );
}

export default ProjectPage;