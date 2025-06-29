import { Property } from "../RecomendationEngin/Property";

/* 
* @description: Interfaz para las propiedades favoritas
* @param property: La propiedad
* @param className: La clase CSS
* @returns: Una interfaz para las propiedades favoritas
*/
export interface FavoriteOwnerShipProps {
    property: Property;
    className?: string;
}