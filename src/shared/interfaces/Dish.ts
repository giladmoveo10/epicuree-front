export interface Dish {
    id: string;
    name: string;
    image: string;
    ingredients: string[];
    ingredientsString?: string;
    price: number;
    restaurant: string;
    signatureDish: boolean;
    tags: string[];
    // stars?: number;
}
