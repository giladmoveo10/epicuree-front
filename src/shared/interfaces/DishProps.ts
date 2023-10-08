interface DishProps {
    dish: {
        id: number;
        title: string;
        pic: string;
        chefName?: string;
        ingredients?: string;
        descriptionPic?: string;
        price?: number;
        rating?: number;
    };
}

export default DishProps;
