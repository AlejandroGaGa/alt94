/* 
* @description: Interfaz para las propiedades de la tarjeta
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
* @returns: Una interfaz para las propiedades de la tarjeta
*/
export interface CardPropertyProps {
    id: number;
    title: string;
    size: number;
    price: number;
    type: string;
    city: string;
    image: string;
    alt?: string;
    rooms: number;
    isFiltered: boolean;
}