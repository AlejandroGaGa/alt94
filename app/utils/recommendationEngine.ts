import { Property } from "../interfaces/RecomendationEngin/Property";
import { PropertyVector } from "../interfaces/RecomendationEngin/PropertyVector";

/**
 * Normaliza un valor entre 0 y 1.
 * 
 * @param value - El valor a normalizar.
 * @param min - El valor mínimo.
 * @param max - El valor máximo.
 * @returns El valor normalizado.
 */
function normalizeValue(value: number, min: number, max: number): number {
    if (max === min) return 0.5;
    return (value - min) / (max - min);
}

/**
 * Crea un vector de características para una propiedad.
 * 
 * @param property - La propiedad a vectorizar.
 * @param allProperties - Todas las propiedades disponibles.
 * @returns Un vector de características para la propiedad.
 * 
 */
export function createPropertyVector(
    property: Property, 
    allProperties: Property[]
): PropertyVector {
    const prices = allProperties.map(p => p.precio);
    const ambientes = allProperties.map(p => p.ambientes);
    const metros = allProperties.map(p => p.metros_cuadrados);
    
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const minAmbientes = Math.min(...ambientes);
    const maxAmbientes = Math.max(...ambientes);
    const minMetros = Math.min(...metros);
    const maxMetros = Math.max(...metros);
    
    const features = {
        tipo: property.tipo === 'Casa' ? 1 : 0, 
        ciudad: property.ciudad.length / 20, 
        precio_normalized: normalizeValue(property.precio, minPrice, maxPrice),
        ambientes_normalized: normalizeValue(property.ambientes, minAmbientes, maxAmbientes),
        metros_normalized: normalizeValue(property.metros_cuadrados, minMetros, maxMetros)
    };
    
    const vector = [
        features.tipo,
        features.ciudad,
        features.precio_normalized,
        features.ambientes_normalized,
        features.metros_normalized
    ];
    
    return {
        id: property.id,
        vector,
        features
    };
}

/**
 * Calcula la similitud coseno entre dos vectores.
 * 
 * @param vec1 - El primer vector.
 * @param vec2 - El segundo vector.
 * @returns La similitud coseno entre los dos vectores.
 */
export function cosineSimilarity(vec1: number[], vec2: number[]): number {
    if (vec1.length !== vec2.length) {
        throw new Error('Los vectores deben tener la misma longitud');
    }
    
    let dotProduct = 0;
    let norm1 = 0;
    let norm2 = 0;
    
    for (let i = 0; i < vec1.length; i++) {
        dotProduct += vec1[i] * vec2[i];
        norm1 += vec1[i] * vec1[i];
        norm2 += vec2[i] * vec2[i];
    }
    
    norm1 = Math.sqrt(norm1);
    norm2 = Math.sqrt(norm2);
    
    if (norm1 === 0 || norm2 === 0) return 0;
    
    return dotProduct / (norm1 * norm2);
}

/**
 * Calcula la similitud ponderada entre dos propiedades.
 * 
 * @param prop1 - La primera propiedad.
 * @param prop2 - La segunda propiedad.
 * @param priceWeight - El peso del precio.
 * @param typeWeight - El peso del tipo.
 * @param cityWeight - El peso de la ciudad.
 * 
 * @returns La similitud ponderada entre las dos propiedades.
 */

export function calculateWeightedSimilarity(
    prop1: Property, 
    prop2: Property, 
    priceWeight: number = 0.3,
    typeWeight: number = 0.4,
    cityWeight: number = 0.3
): number {
    let similarity = 0;
    
    if (prop1.tipo === prop2.tipo) {
        similarity += typeWeight;
    }
    
    if (prop1.ciudad === prop2.ciudad) {
        similarity += cityWeight;
    }
    
    const priceDiff = Math.abs(prop1.precio - prop2.precio);
    const priceThreshold = prop1.precio * 0.2;
    
    if (priceDiff <= priceThreshold) {
        const priceSimilarity = 1 - (priceDiff / priceThreshold);
        similarity += priceWeight * priceSimilarity;
    }
    
    return similarity;
}

/**
 * Encuentra recomendaciones de propiedades.
 * 
 * @param targetProperty - La propiedad objetivo.
 * @param allProperties - Todas las propiedades disponibles.
 * @param limit - El número de propiedades a recomendar.
 * @param useVectorSimilarity - Si se debe usar la similitud por vectores.
 * 
 * @returns Un array de propiedades recomendadas.
 */
export function findRecommendations(
    targetProperty: Property,
    allProperties: Property[],
    limit: number = 8,
    useVectorSimilarity: boolean = true
): (Property & { similarity: number })[] {
    
    if (useVectorSimilarity) {
        const targetVector = createPropertyVector(targetProperty, allProperties);
        
        const similarities = allProperties
            .filter(prop => prop.id !== targetProperty.id)
            .map(prop => {
                const propVector = createPropertyVector(prop, allProperties);
                const vectorSimilarity = cosineSimilarity(targetVector.vector, propVector.vector);
                const weightedSimilarity = calculateWeightedSimilarity(targetProperty, prop);
                
                const combinedSimilarity = (vectorSimilarity * 0.6) + (weightedSimilarity * 0.4);
                
                return {
                    property: prop,
                    similarity: combinedSimilarity
                };
            })
            .filter(item => item.similarity > 0.2)
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, limit)
            .map(item => ({
                ...item.property,
                similarity: item.similarity
            }));
        
        return similarities;
    } else {
        const similarities = allProperties
            .filter(prop => prop.id !== targetProperty.id)
            .map(prop => ({
                property: prop,
                similarity: calculateWeightedSimilarity(targetProperty, prop)
            }))
            .filter(item => item.similarity > 0.3)
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, limit)
            .map(item => ({
                ...item.property,
                similarity: item.similarity
            }));
        
        return similarities;
    }
}

/**
 * Crea una propiedad de referencia.
 * 
 * @param type - El tipo de propiedad.
 * @param city - La ciudad de la propiedad.
 * @param price - El precio de la propiedad.
 * @returns Una propiedad de referencia.
 */
export function createReferenceProperty(
    type: string | null,
    city: string | null,
    price: string | null
): Property | null {
    if (!type || !city || !price) {
        return null;
    }
    
    const priceNum = parseInt(price);
    if (isNaN(priceNum)) {
        return null;
    }
    
    return {
        id: -1,
        titulo: `Referencia ${type} en ${city}`,
        ciudad: city,
        tipo: type,
        precio: priceNum,
        ambientes: 0,
        metros_cuadrados: 0,
        imagen: ""
    };
} 