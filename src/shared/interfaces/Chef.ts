import CardItem from "./CardItem";
import { Restaurant, RestaurantFromDB } from "./Restaurant";

export interface Chef {
    id: string;
    firstName: string;
    lastName: string;
    image: string;
    description: string;
    restaurants: Restaurant[];
    restaurantCards?: CardItem[];
}

export interface ChefFromDB {
    _id: string;
    name: string;
    image: string;
    description: string;
    restaurants: RestaurantFromDB[];
}
