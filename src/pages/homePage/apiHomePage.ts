import { Dish } from "../../shared/interfaces/Dish";
import CardItem from "../../shared/interfaces/CardItem";
import { Chef, ChefFromDB } from "../../shared/interfaces/Chef";
import { Restaurant, RestaurantFromDB } from "../../shared/interfaces/Restaurant";
import { getDishes, getSignatureDishes, getChefs, getFeaturedChef } from "../../services/HomePage";

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
    console.log("dishes", dishes);
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
    const response = await getFeaturedChef();
    return transformToChefItem(response.data);
};
