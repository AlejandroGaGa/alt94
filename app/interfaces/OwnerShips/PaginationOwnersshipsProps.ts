/* 
* @description: Interfaz para la paginación de las propiedades
* @param currentPage: La página actual
* @param totalItems: El total de propiedades
* @param itemsPerPage: El número de propiedades por página
* @returns: Una interfaz para la paginación de las propiedades
*/
export interface PaginationOwnersshipsProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
}