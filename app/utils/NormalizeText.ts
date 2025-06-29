/* 
* @description: Normaliza el texto
* @param text: El texto a normalizar
* @returns: El texto normalizado
*/
export const normalizeText = (text: string) => {
    return text
        ?.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '')
        ?? '';
};