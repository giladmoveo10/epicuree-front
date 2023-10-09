// import { restaurants } from "./restaurantsData"; // ! need to use it
import Onza from "../images/onza.png";
import Kitchen from "../images/kitchen-market.png";
import Yosi from "../images/yossi-shitrit.png";

export const chefOfTheWeek = {
    id: 1,
    chefFirstName: "Yossi",
    chefLastName: "Shitrit",
    pictureOfChef: `${Yosi}`,
    description:
        "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    restaurants: [
        { nameOfRestaurant: "Onza", pictureOfRestaurant: `${Onza}` },
        { nameOfRestaurant: "Kitchen", pictureOfRestaurant: `${Kitchen}` },
    ],
};
