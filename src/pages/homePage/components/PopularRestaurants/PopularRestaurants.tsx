import "./PopularRestaurants.scss";
import { useEffect, useState } from "react";
import { fetchPopularRestaurants } from "../../apiHomePage";
import CardItem, { CardItemType } from "../../../../shared/interfaces/CardItem";
import Carusel from "../Carusel/Carusel";

const PopularRestaurants: React.FC = () => {
    const [popularRestaurants, setPopularRestaurants] = useState<CardItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const restaurants = await fetchPopularRestaurants();
            if (restaurants) {
                setPopularRestaurants(restaurants);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="restaurant-list">
            <h2 className="restaurant-title">Popular Restaurants:</h2>
            {isLoading ? (
                <p>Loading Popular Restaurants</p>
            ) : (
                <Carusel items={popularRestaurants} cardType={CardItemType.POPULAR_RESTAURANT} />
            )}
        </div>
    );
};

export default PopularRestaurants;
