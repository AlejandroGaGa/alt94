/* 
* @description: Interfaz para el vector de propiedades
* @param id: El id de la propiedad
* @param vector: El vector de la propiedad
* @param features: Las características de la propiedad
* @returns: Una interfaz para el vector de propiedades
*/
export interface PropertyVector {
    id: number;
    vector: number[];
    features: {
        tipo: number;
        ciudad: number;
        precio_normalized: number;
        ambientes_normalized: number;
        metros_normalized: number;
    };
}
