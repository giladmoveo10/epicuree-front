export interface Dish {
    _id: string;
    name: string;
    image: string;
    ingredients: string[];
    ingredientsString?: string;
    price: number;
    restaurant: string;
    signatureDish: boolean;
}
