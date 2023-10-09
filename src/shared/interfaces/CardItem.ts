interface CardItem {
    id: number;
    title: string;
    pic: string;
    chefName?: string;
    restaurantName?: string;
    ingredients?: string;
    descriptionPic?: string;
    price?: number;
    rating?: number;
}

export interface CardItemList {
    items: CardItem[];
}

export default CardItem;
