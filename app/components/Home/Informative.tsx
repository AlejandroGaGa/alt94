import Image from "next/image";

const Informative = () => {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/Inmobiliaria/inmobiliaria.webp"
              alt="Torre 1"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/Inmobiliaria/inmobiliaria.webp"
                alt="Torre 2"
                width={300}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/Inmobiliaria/inmobiliaria.webp"
                alt="Torre 3"
                width={300}
                height={200}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg italic">Conoce los beneficios</h3>
            <h2 className="text-4xl font-bold mb-4">¿Por qué invertir en alt94?</h2>
            <p className="text-gray-700 text-base">
              Adquirir un departamento en preventa en alt94 Diamante no solo te asegura un precio preferencial, también abre la puerta a una alta plusvalía y la oportunidad de generar ingresos a futuro.
              <br />
              Haz crecer tu patrimonio en una de las zonas más exclusivas del país, frente al mar y con amenidades de primer nivel.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">+</div>
              <div>
                <h4 className="font-semibold text-lg">Plusvalía garantizada</h4>
                <p className="text-sm text-gray-700">Asegura una plusvalía de hasta <strong>30%</strong>.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">↑</div>
              <div>
                <h4 className="font-semibold text-lg">Genera ingresos</h4>
                <p className="text-sm text-gray-700">Ideal para generar ingresos por renta vacacional.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">$</div>
              <div>
                <h4 className="font-semibold text-lg">Ahorro por preventa</h4>
                <p className="text-sm text-gray-700">Ahorra entre <strong>15%</strong> y <strong>25%</strong> al comprar en preventa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Informative;
