// api.js
import axios from "axios";
import { Dish } from "../../shared/interfaces/Dish";
import CardItem from "../../shared/interfaces/CardItem";

const BASE_URL = "http://localhost:3001/api";

export const fetchDishes = async (): Promise<Dish[]> => {
    try {
        const response = await axios.get<Dish[]>(`${BASE_URL}/dishes`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export function transformToCardItem(dishes: Dish[]): CardItem[] {
    return dishes.map((dish) => ({
        id: dish._id,
        image: dish.image,
        title: dish.name,
        ingredients: dish.ingredients,
        price: dish.price,
    }));
}

// export async function fetchDish(id: Number) {};
