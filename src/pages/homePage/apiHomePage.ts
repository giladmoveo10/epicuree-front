import { Dish } from "../../shared/interfaces/Dish";
import CardItem from "../../shared/interfaces/CardItem";
import { Chef, ChefFromDB } from "../../shared/interfaces/Chef";
import { Restaurant } from "../../shared/interfaces/Restaurant";
import {
    getDishes,
    getSignatureDishes,
    getChefs,
    getFeaturedChef,
    getPopularRestaurants,
} from "../../services/HomePage";

export const fetchDishes = async (): Promise<Dish[]> => {
    const response = await getDishes();
    const transformedDishes = processDishes(response.data);
    return transformedDishes;
};

export const fetchSignatureDishes = async (): Promise<Dish[]> => {
    const response = await getSignatureDishes();
    const transformedDishes = processDishes(response.data);
    return transformedDishes;
};

function processDishes(dishes: Dish[]): Dish[] {
    return dishes.map((dish) => ({
        ...dish,
        ingredientsString: dish.ingredients.join(", "),
    }));
}

export function transformDishToCardItem(dishes: Dish[]): CardItem[] {
    return dishes.map((dish) => ({
        id: dish.id,
        image: dish.image,
        title: dish.name,
        ingredients: dish.ingredientsString,
        price: dish.price,
        tags: dish.tags,
        signatureDish: dish.signatureDish,
    }));
}

export const fetchChefs = async (): Promise<Chef[]> => {
    const response = await getChefs();
    const transformedChefs = transformToChefItems(response.data);
    return transformedChefs;
};

function transformRestaurantToCardItem(restaurants: Restaurant[]): CardItem[] {
    return restaurants.map((restaurant) => ({
        id: restaurant.id,
        image: restaurant.image,
        restaurantName: restaurant.name,
        stars: restaurant.stars,
        popular: restaurant.popular,
        chefName: restaurant.chef.name,
    }));
}

const transformToChefItems = (chefsFromDB: ChefFromDB[]): Chef[] => {
    return chefsFromDB.map((chefFromDB) => {
        return transformToChefItem(chefFromDB);
    });
};

const transformToChefItem = (chefFromDB: ChefFromDB): Chef => {
    const [firstName, lastName] = chefFromDB.name.split(" ");
    const restaurantCards = transformRestaurantToCardItem(chefFromDB.restaurants);

    return {
        id: chefFromDB._id,
        firstName: firstName,
        lastName: lastName,
        image: chefFromDB.image,
        description: chefFromDB.description,
        restaurants: chefFromDB.restaurants,
        restaurantCards: restaurantCards,
    };
};

export const fetchFeaturedChef = async (): Promise<Chef> => {
    const response = await getFeaturedChef();
    return transformToChefItem(response.data);
};

export const fetchPopularRestaurants = async (): Promise<CardItem[]> => {
    const response = await getPopularRestaurants();
    return transformRestaurantToCardItem(response.data);
};
