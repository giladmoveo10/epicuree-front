// api.js
import axios from "axios";
import { Dish } from "../../shared/interfaces/Dish";
import CardItem from "../../shared/interfaces/CardItem";
import { Chef, ChefFromDB } from "../../shared/interfaces/Chef";
import { Restaurant, RestaurantFromDB } from "../../shared/interfaces/Restaurant";
import { transform } from "typescript";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchDishes = async (): Promise<Dish[]> => {
    try {
        const response = await axios.get<Dish[]>(`${BASE_URL}/dishes`);
        const transformedDishes = response.data.map((dish) => ({
            ...dish,
            ingredientsString: dish.ingredients.join(", "),
        }));
        return transformedDishes;
        // return response.data;
    } catch (error) {
        console.error("Failed to fetch Dishes:", error);
        throw error;
    }
};

export function transformDishToCardItem(dishes: Dish[]): CardItem[] {
    return dishes.map((dish) => ({
        id: dish._id,
        image: dish.image,
        title: dish.name,
        ingredients: dish.ingredientsString,
        price: dish.price,
    }));
}

export const fetchChefs = async (): Promise<Chef[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/chefs`);
        const transformedChefs = transformToChefItems(response.data);
        return transformedChefs;
    } catch (error) {
        console.error("Failed to fetch chefs:", error);
        throw error;
    }
};

function transformRestaurantToCardItem(restaurants: Restaurant[]): CardItem[] {
    return restaurants.map((restaurant) => ({
        id: restaurant.id,
        image: restaurant.image,
        restaurantName: restaurant.name,
    }));
}

const transformToChefItems = (chefsFromDB: ChefFromDB[]): Chef[] => {
    return chefsFromDB.map((chefFromDB) => {
        return transformToChefItem(chefFromDB);
    });
};

const transformToChefItem = (chefFromDB: ChefFromDB): Chef => {
    const [firstName, lastName] = chefFromDB.name.split(" ");

    const restaurants = chefFromDB.restaurants.map((restaurant: RestaurantFromDB) => ({
        id: restaurant._id,
        name: restaurant.name,
        image: restaurant.image,
        chef: restaurant.chef,
        dishes: restaurant.dishes,
    }));

    const restaurantCards = transformRestaurantToCardItem(restaurants);

    return {
        id: chefFromDB._id,
        firstName: firstName,
        lastName: lastName,
        image: chefFromDB.image,
        description: chefFromDB.description,
        restaurants: restaurants,
        restaurantCards: restaurantCards,
    };
};

export const fetchFeaturedChef = async (): Promise<Chef> => {
    try {
        const response = await axios.get(`${BASE_URL}/featuredChef`);
        return transformToChefItem(response.data);
    } catch (error) {
        console.error("Failed to fetch featured chef:", error);
        throw error;
    }
};
