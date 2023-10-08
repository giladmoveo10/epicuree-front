interface SwiperItem {
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

export interface FoodSwiperProps {
    items: SwiperItem[];
}

export default SwiperItem;
