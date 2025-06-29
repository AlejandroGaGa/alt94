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