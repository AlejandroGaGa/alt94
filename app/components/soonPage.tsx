import Link from "next/link";

const SoonPage = () => {
    return (
      <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800 min-h-screen">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 text-center">
          <div className="max-w-md">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-400">🚧</h2>
            <h1 className="text-4xl font-bold mb-4">Sección en construcción</h1>
            <p className="text-lg mb-6">
              Estamos trabajando para traerte esta funcionalidad muy pronto.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Nos gusta que experimentes nuevas funcionalidades, por eso estamos trabajando para traerte esta funcionalidad muy pronto.
            </p>
            <Link
             href={"/"}
              className="px-6 py-3 text-white bg-black hover:bg-gray-800 rounded-lg"
            >
              Volver atrás
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default SoonPage;
  