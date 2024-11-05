function ApiPage() {

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white geist-regular"> 
      <h1 className="text-4xl mt-10">Climate Sense</h1>
      <p className="text-lg mt-5 text-center max-w-[80%]">
        ¿Quieres utilizar los datos recolectados por nuestros sensores con algún fin educativo? Aqui te explico como puedes acceder a ellos
      </p>
      <div className="gettingstarted max-w-[80%]">
        <div className="apikey mt-20">
            <p className="text-3xl">API</p>
        </div>
      </div>
    </div>
  );
}

export default ApiPage;