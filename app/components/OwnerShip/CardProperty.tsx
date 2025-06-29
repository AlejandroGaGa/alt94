"use client";
import { CardPropertyProps } from "@/app/interfaces/Home/CardPropertyProps";
import { Button } from "@headlessui/react";
import Decimal from "decimal.js";
import Image from "next/image";
import { useState } from "react";
import RecomendDialog from "./Recommends/RecomendDialog";
import { SparklesIcon } from "@heroicons/react/24/solid";
import FavoriteOwnerShip from "../FavoriteOwnerShip";

/* 
* @description: Muestra una propiedad en la lista de propiedades
* @param id: El id de la propiedad
* @param title: El título de la propiedad
* @param size: El tamaño de la propiedad
* @param price: El precio de la propiedad
* @param type: El tipo de propiedad
* @param city: La ciudad de la propiedad
* @param image: La imagen de la propiedad
* @param alt: El alt de la propiedad
* @param rooms: El número de habitaciones de la propiedad
* @param isFiltered: Indica si la propiedad está filtrada
* @returns: Una tarjeta con la propiedad
*/
const CardProperty = ({
    id = 0,
    title = "",
    size = 0,
    price = 0,
    type = "",
    city = "",
    image = "/Inmobiliaria/logo.webp",
    alt = "Property image",
    rooms = 0,
    isFiltered = false
}: CardPropertyProps) => {
    const [img, setImageError] = useState(image);
    const [isOpen, setIsOpen] = useState(false);
    const [recommendations, setRecommendations] = useState([]);


    const handleOpen = () => {
        setIsOpen(true);
        fetchRecommendations();
    }

    const fetchRecommendations = async () => {
        try {
            const resRecommendedOwnerships = await fetch(`/api/ownerships/recommended?type=${type}&city=${city}&price=${price}&useVector=true&limit=5`);
            const response = await resRecommendedOwnerships.json();
            setRecommendations(response?.recommendations);
        } catch (error) {
            console.log(error, 'error');
        }
    }
    return (
        <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" className="bg-white rounded-xl shadow p-4 max-w-5xl mx-auto w-full overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="flex justify-end">
                <FavoriteOwnerShip property={{
                    id: id,
                    titulo: title,
                    imagen: img,
                    precio: price,
                    tipo: type,
                    ciudad: city,
                    metros_cuadrados: size,
                    ambientes: rooms,
                }} />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-50 h-50 relative shrink-0 rounded-3xl overflow-hidden">
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
                        <p className="text-lg font-bold text-gray-800">{rooms}</p>
                        <p className="text-sm text-gray-500">Habitaciones</p>
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
            {!isFiltered && (
                <>
                    <Button onClick={handleOpen} className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-800 transition duration-300 cursor-pointer"
                    >
                        <SparklesIcon className="h-5 w-5 text-white" />
                        <span className="text-sm font-medium">Ver recomendaciones</span>
                    </Button>
                    <RecomendDialog isOpen={isOpen} setIsOpen={setIsOpen} recommendations={recommendations} />
                </>
            )}

        </div>

    );
};

export default CardProperty;
