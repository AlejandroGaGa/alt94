"use client";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import CardProperty from "../CardProperty";
import Decimal from "decimal.js";

/* 
* @description: Muestra las recomendaciones de propiedades
* @param isOpen: Indica si el diálogo está abierto o cerrado
* @param setIsOpen: Función para cerrar el diálogo
* @param recommendations: Las recomendaciones de propiedades
* @returns: Un diálogo con las recomendaciones de propiedades
*/
const RecomendDialog = ({
    isOpen,
    setIsOpen,
    recommendations,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    recommendations: any;
}) => {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/55">
                <DialogPanel className="relative max-w-lg space-y-4 bg-white p-12 rounded-2xl transition-all duration-300 ease-in-out data-closed:opacity-0">

                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition cursor-pointer"
                        aria-label="Cerrar"
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </button>

                    <DialogTitle className="font-bold text-2xl">Las mejores casas para ti</DialogTitle>
                    <p className="text-sm text-gray-500">Recomendaciones basadas en tu selección</p>

                    <div className="flex gap-4">
                        <p className="text-sm text-gray-500">Precio: ${new Decimal(recommendations[0]?.precio || 0).toDecimalPlaces(2).toNumber().toLocaleString("es-MX", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}</p>
                        <p className="text-sm text-gray-500">Tipo: {recommendations[0]?.tipo}</p>
                        <p className="text-sm text-gray-500">Ciudad: {recommendations[0]?.ciudad}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[500px] pr-2">
                        {recommendations.map((recommendation: any) => (
                            <CardProperty
                                key={recommendation.id}
                                id={recommendation.id}
                                image={recommendation.imagen}
                                alt={recommendation.alt}
                                title={recommendation.titulo}
                                size={recommendation.metros_cuadrados}
                                price={recommendation.precio}
                                type={recommendation.tipo}
                                rooms={recommendation.ambientes}
                                city={recommendation.ciudad}
                                isFiltered={true}
                            />
                        ))}
                    </div>

                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default RecomendDialog;
