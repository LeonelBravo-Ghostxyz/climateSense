import { Link } from 'react-router-dom';

function ClimateSensePage() {

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white geist-regular"> 
      <h1 className="text-4xl mt-10">Climate Sense</h1>
      <p className="text-lg mt-5 text-center">
        Estas viendo la pagina prototipo de nuestro proyecto, utiliza <Link to="/" className="text-blue-500 hover:underline">home</Link> para comenzar tu experiencia
      </p>
    </div>
  );
}

export default ClimateSensePage;