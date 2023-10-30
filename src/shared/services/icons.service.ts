import spicy from "../../assets/icons/spicyIcon.svg";
import vegi from "../../assets/icons/vegiIcon.svg";
import vegan from "../../assets/icons/veganIcon.svg";

export interface IconDictionary {
    [key: string]: string;
}

const icons: IconDictionary = {
    Spicy: spicy,
    Vegetarian: vegi,
    Vegan: vegan,
};

export default icons;
