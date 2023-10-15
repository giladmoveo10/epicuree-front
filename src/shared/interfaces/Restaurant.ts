export interface Restaurant {
    id: string;
    name: string;
    chef: string;
    image: string;
    dishes: string[];
}

export interface RestaurantFromDB {
    _id: string;
    name: string;
    chef: string;
    image: string;
    dishes: string[];
}
