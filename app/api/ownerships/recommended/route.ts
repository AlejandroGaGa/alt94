import { NextResponse } from "next/server";
import getDatabase from "../../data/getdatabase";
import {
    findRecommendations,
    createReferenceProperty
} from "@/app/utils/recommendationEngine";
import { Property } from "@/app/interfaces/RecomendationEngin/Property";

/**
 * Maneja recomendaciones de propiedades.
 * 
 * @param type - El tipo de propiedad a recomendar.
 * @param city - La ciudad de la propiedad a recomendar.
 * @param price - El precio de la propiedad a recomendar.
 * @param useVector - Si se debe usar el vector de características.
 * @param limit - El número de propiedades a recomendar.
 * 
 * @param request - La solicitud HTTP recibida.
 * @returns Una respuesta HTTP con las recomendaciones de propiedades.
 * - **Similitud por vectores** (por defecto): Calcula propiedades similares usando operaciones vectoriales.
 * - **Similitud ponderada**: Alternativa que compara atributos directamente con pesos asignados.
 * 
 */
export async function GET(request: Request) {
    const url = new URL(request.url);
    const type = url.searchParams.get('type');
    const city = url.searchParams.get('city');
    const price = url.searchParams.get('price');
    const useVector = url.searchParams.get('useVector') !== 'false';
    const limit = parseInt(url.searchParams.get('limit') || '8');

    const data = await getDatabase() as Property[];

    const allCities = Array.from(new Set(data.map((item: Property) => item.ciudad)));
    const allTypes = Array.from(new Set(data.map((item: Property) => item.tipo)));

    if (!type || !city || !price) {
        const randomProperties = data
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);

        return NextResponse.json({
            recommendations: randomProperties,
            message: "Parámetros incompletos, mostrando propiedades aleatorias",
            availableCities: allCities,
            availableTypes: allTypes,
            algorithm: "random"
        });
    }

    const referenceProperty = createReferenceProperty(type, city, price);

    if (!referenceProperty) {
        return NextResponse.json({
            error: "Parámetros inválidos",
            availableCities: allCities,
            availableTypes: allTypes
        }, { status: 400 });
    }

    const recommendations = findRecommendations(
        referenceProperty,
        data,
        limit,
        useVector
    );

    if (recommendations.length < 5) {
        const additionalProps = data
            .filter((prop: Property) =>
                prop.tipo === type ||
                prop.ciudad === city
            )
            .filter((prop: Property) => !recommendations.find(rec => rec.id === prop.id))
            .slice(0, 5 - recommendations.length)
            .map(prop => ({ ...prop, similarity: 0.1 }));

        recommendations.push(...additionalProps);
    }

    return NextResponse.json({
        recommendations: recommendations,
        referenceProperty: {
            tipo: referenceProperty.tipo,
            ciudad: referenceProperty.ciudad,
            precio: referenceProperty.precio
        },
        availableCities: allCities,
        availableTypes: allTypes,
        totalFound: recommendations.length,
        algorithm: useVector ? "vector-similarity" : "weighted-similarity",
        parameters: {
            type,
            city,
            price,
            useVector,
            limit
        }
    });
}