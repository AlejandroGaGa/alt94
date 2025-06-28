"use client";
import { useState } from "react";
import Image from "next/image";
import { CardPropertyProps } from "@/app/interfaces/Home/CardPropertyProps";
import Decimal from "decimal.js";
import RecommendOwnerShips from "./RecommendOwnerShips";

const CardProperty = ({
    title = "",
    size = 0,
    price = 0,
    type = "",
    city = "",
    image = "/Inmobiliaria/logo.webp",
    alt = "Property image"
}: CardPropertyProps) => {
    const [img, setImageError] = useState(image);

    return (
        <div className="bg-white rounded-xl shadow p-4 max-w-5xl mx-auto w-full overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-16 h-16 relative shrink-0">
                        <Image
                            src={img}
                            alt={alt}
                            fill
                            className="object-contain"
                            onError={() => setImageError("/Inmobiliaria/notFound.webp")}
                        />
                    </div>
                    <div className="truncate">
                        <div className="flex flex-wrap items-center gap-1 font-semibold text-lg text-gray-800">
                            <span className="truncate">{title}</span>

                        </div>
                        <div className="flex flex-wrap items-center gap-1 font-semibold text-lg text-gray-800">
                            <span className="text-sm text-gray-500 truncate">Tipo: {type}</span>

                        </div>
                        <span className="text-sm text-gray-500 truncate">Ciudad: {city}</span>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col gap-4 md:gap-2 text-center justify-center flex-1 md:w-48">
                    <div className="flex-1">
                        <p className="text-lg font-bold text-gray-800">{size}</p>
                        <p className="text-sm text-gray-500">Metros cuadrados</p>
                    </div>
                    <div className="flex-1">
                        <p className="text-lg font-bold text-gray-800"> ${new Decimal(price).toDecimalPlaces(2).toNumber().toLocaleString("es-MX", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}</p>
                        <p className="text-sm text-gray-500">Precio</p>
                    </div>
                </div>

            </div>
            <RecommendOwnerShips
                price={price}
                type={type}
                city={city}
            />
        </div>
    );
};

export default CardProperty;
