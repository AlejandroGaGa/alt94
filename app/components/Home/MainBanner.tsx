import Image from 'next/image';

const MainBanner = () => {
    return (
        <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="w-full h-full rounded-lg">
                <div className="relative w-full h-full flex items-center justify-center rounded-4xl overflow-hidden">
                    <Image
                        src="/Inmobiliaria/inmobiliaria.webp"
                        alt="Banner de inmobiliaria"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center rounded-4xl z-10">
                        <h1 className="text-white text-4xl font-bold">LA CASA DE TUS SUEÑOS</h1>
                        <p className="text-white text-2xl text-center px-8">
                            <span className="font-bold">alt94</span> es una inmobiliaria que se dedica a la venta y alquiler de propiedades <span className="font-bold">DIGITALMENTE</span>.
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default MainBanner;