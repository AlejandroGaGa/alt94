/* 
* @description: Interfaz para las propiedades
* @param id: El id de la propiedad
* @param titulo: El título de la propiedad
* @param ciudad: La ciudad de la propiedad
* @param tipo: El tipo de propiedad
* @param precio: El precio de la propiedad
* @param ambientes: El número de ambientes de la propiedad
* @param metros_cuadrados: Los metros cuadrados de la propiedad
* @param imagen: La imagen de la propiedad
* @returns: Una interfaz para las propiedades
*/
export interface Property {
    id: number;
    titulo: string;
    ciudad: string;
    tipo: string;
    precio: number;
    ambientes: number;
    metros_cuadrados: number;
    imagen: string;
}
