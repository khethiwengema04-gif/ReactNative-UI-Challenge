export interface Destination {
    name: string;
    country: string;
    flag: string;
    rating: string;
    reviews: number;
    hero: string;
    description: string;
}

export interface Tour {
    id: string;
    title: string;
    days: number;
    price: number;
    rating: string;
    reviews: number;
    image: string;
}