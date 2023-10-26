import "./PopularRestaurants.scss";
import { useEffect, useState } from "react";
import { fetchPopularRestaurants } from "../../apiHomePage";
import CardItem, { CardItemType } from "../../../../shared/interfaces/CardItem";
import Carusel from "../Carusel/Carusel";
import AllRestaurants from "../AllRestaurants/AllRestaurants";

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
        <div className="container">
            <div className="restaurant-list">
                <h2 className="restaurant-title">Popular Restaurants:</h2>
                {isLoading ? (
                    <p>Loading Popular Restaurants</p>
                ) : (
                    <Carusel items={popularRestaurants} cardType={CardItemType.POPULAR_RESTAURANT} />
                )}
            </div>
            <div className="all-restaurants">
                <AllRestaurants />
            </div>
        </div>
    );
};

export default PopularRestaurants;
