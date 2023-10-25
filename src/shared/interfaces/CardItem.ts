interface CardItem {
    id: string;
    image: string;
    title?: string;
    chefName?: string;
    restaurantName?: string;
    ingredients?: string;
    descriptionPic?: string;
    price?: number;
    rating?: number;
    stars?: number;
    tags?: string[];
}

export interface CardItemList {
    items: CardItem[];
}

export default CardItem;
