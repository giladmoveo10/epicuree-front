import { ChefFromDB } from "./Chef";
import { Dish } from "./Dish";

export interface Restaurant {
    id: string;
    name: string;
    chef: ChefFromDB;
    image: string;
    dishes: Dish[];
    stars: number;
    popular: boolean;
}
