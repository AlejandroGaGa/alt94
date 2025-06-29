import Image from "next/image";

const BannerOwnership = ({ title }: { title: string }) => {
    return (
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <Image
                src="/Inmobiliaria/inmobiliaria.webp"
                alt="Banner de inmobiliaria"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h1 className="text-white text-2xl font-semibold">{title}</h1>
            </div>
        </div>
    );
};

export default BannerOwnership;
