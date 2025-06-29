/* 
* @description: Interfaz para los filtros de las propiedades
* @param city: La ciudad de la propiedad
* @param type: El tipo de propiedad
* @param useVector: Indica si se debe usar el vector de características
* @returns: Una interfaz para los filtros de las propiedades
*/
export interface ownershipsFetched {
  city: string;
  type: string;
  useVector: boolean;
  }
  