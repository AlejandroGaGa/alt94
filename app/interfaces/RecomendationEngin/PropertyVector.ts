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
