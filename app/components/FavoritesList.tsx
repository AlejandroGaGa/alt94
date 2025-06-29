'use client';

import { useFavorites, useFavoritesCount } from '../context/favorites-context';
import { Property } from '../interfaces/RecomendationEngin/Property';
import { TrashIcon } from '@heroicons/react/24/outline';
import CardProperty from './OwnerShip/CardProperty';
import { Button } from '@headlessui/react';

/* 
* @description: Muestra la lista de propiedades favoritas
* @returns: Una lista de propiedades favoritas
*/
const FavoritesList = () => {
    const { state, removeFavorite, clearFavorites } = useFavorites();
    const favoritesCount = useFavoritesCount();

    if (state.isLoading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#002DFF]"></div>
            </div>
        );
    }

    if (favoritesCount === 0) {
        return (
            <div className="text-center p-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    No tienes propiedades favoritas
                </h3>
                <p className="text-gray-500">
                    Agrega propiedades a tus favoritos para verlas aquí
                </p>
            </div>
        );
    }

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Mis Favoritos ({favoritesCount})
                </h2>
                <Button
                    onClick={clearFavorites}
                    className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                >
                    <TrashIcon className="w-5 h-5 text-white" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.favorites.map((property: Property) => (
                    <CardProperty
                        key={property.id}
                        id={property.id}
                        isFiltered={false}
                        title={property.titulo}
                        size={property.metros_cuadrados}
                        price={property.precio}
                        type={property.tipo}
                        city={property.ciudad}
                        image={property.imagen}
                        rooms={property.ambientes}
                    />
                ))}
            </div>
        </div>
    );
};

export default FavoritesList; 