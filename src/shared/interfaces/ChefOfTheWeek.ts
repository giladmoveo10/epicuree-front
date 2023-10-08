import { Restaurant } from "./Restaurant";
import { Chef } from "./Chef";

export interface ChefOfTheWeekProps {
    chef: Chef;
    restaurants: Restaurant[];
}
