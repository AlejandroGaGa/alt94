import Image from "next/image";
import { CardPropertyProps } from "@/app/interfaces/Home/CardPropertyProps";


const CardProperty = ({ title, description, image, alt = "Property image" }: CardPropertyProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-shadow duration-300 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        className="object-cover"
                    />
                </div>
                
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {description}
                    </p>
                    <button className="bg-[#000000] hover:bg-[#000000]/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 self-start">
                        Conocer esta casa
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProperty;