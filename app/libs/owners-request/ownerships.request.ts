/* 
* @description: Obtiene las propiedades
* @param page: La página actual
* @param limit: El límite de propiedades
* @returns: Las propiedades
*/
export default {
    /* 
    * @description: Obtiene las propiedades
    * @param page: La página actual
    * @param limit: El límite de propiedades
    * @returns: Las propiedades
    */
    getOwnerships: async (page: number, limit: number) => {
        const response = await fetch(`${process.env.BASE_URL}/api/ownerships?page=${page}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch ownerships');
        }
        const data = await response.json();
        return data;
    },
    /* 
    * @description: Obtiene las propiedades por tipo y ciudad
    * @param tipo: El tipo de propiedad
    * @param ciudad: La ciudad de la propiedad
    * @returns: Las propiedades
    */
    getOwnershipsBy: async (tipo: string, ciudad: string) => {
       
        const response = await fetch(`${process.env.BASE_URL}/api/ownerships/by?type=${tipo}&city=${ciudad}`);
        if (!response.ok) {
            throw new Error('Failed to fetch ownerships');
        }
        const data = await response.json();
        return data;
    },
    /* 
    * @description: Obtiene las propiedades recomendadas
    * @param type: El tipo de propiedad
    * @param city: La ciudad de la propiedad
    * @param price: El precio de la propiedad
    * @param useVector: Indica si se debe usar el vector de características
    * @param limit: El límite de propiedades
    * @returns: Las propiedades recomendadas
    */
    getRecommendedOwnerships: async (type: string, city: string, price: string, useVector: boolean, limit: number) => {
        const response = await fetch(`${process.env.BASE_URL}/api/ownerships/recommended?type=${type}&city=${city}&price=${price}&useVector=${useVector}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recommended ownerships');
        }
        const data = await response.json();
        return data;
    }
};
