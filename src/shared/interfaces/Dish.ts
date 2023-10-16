export interface Dish {
    _id: string;
    name: string;
    image: string;
    ingredients: string[];
    ingredientsString?: string;
    descriptionPic: string;
    price: number;
}
