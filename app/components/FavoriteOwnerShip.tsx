'use client';

import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useFavorites } from '../context/favorites-context';
import { Property } from '../interfaces/RecomendationEngin/Property';

interface FavoriteOwnerShipProps {
    property: Property;
    className?: string;
}

const FavoriteOwnerShip: React.FC<FavoriteOwnerShipProps> = ({ property, className = "" }) => {
    console.log(property, 'property');
    const { isFavorite, toggleFavorite } = useFavorites();
    const isPropertyFavorite = isFavorite(property.id);

    const handleToggleFavorite = () => {
        toggleFavorite(property);
    };

    return (
        <div className={className}>
            <button
                onClick={handleToggleFavorite}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label={isPropertyFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            >
                {isPropertyFavorite ? (
                    <HeartSolidIcon className="w-6 h-6 text-[#002DFF] hover:text-gray-500" />
                ) : (
                    <HeartIcon className="w-6 h-6 text-[#002DFF] hover:text-gray-500" />
                )}
            </button>
        </div>
    )
}

export default FavoriteOwnerShip;