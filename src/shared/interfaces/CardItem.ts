interface CardItem {
    id: string;
    image: string;
    title?: string;
    chefName?: string;
    restaurantName?: string;
    ingredients?: string;
    price?: number;
    rating?: number;
    stars?: number;
    tags?: string[];
    popular?: boolean;
}

export interface CardItemList {
    items: CardItem[];
    cardType: CardItemType;
}

export enum CardItemType {
    DISH = "dish",
    POPULAR_RESTAURANT = "popular",
    CHEF_RESTAURANT = "chef-of-the-week",
}

export default CardItem;
