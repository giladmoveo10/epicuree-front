import "./ChefOfTheWeek.scss";
import Carusel from "../Carusel/Carusel";
import AllRestaurants from "../AllRestaurants/AllRestaurants";
import { useEffect, useState } from "react";
import { fetchFeaturedChef } from "../../apiHomePage";
import { Chef } from "../../../../shared/interfaces/Chef";
import { CardItemType } from "../../../../shared/interfaces/CardItem";

const ChefOfTheWeek: React.FC = () => {
    const [chefOfTheWeek, setChefOfTheWeek] = useState<Chef | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);

        try {
            const fetchData = async () => {
                const chef = await fetchFeaturedChef();
                setChefOfTheWeek(chef);
            };

            fetchData();
        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const backgroundImage = chefOfTheWeek ? { backgroundImage: `url(${chefOfTheWeek.image})` } : {};

    return (
        <div className="chef-container">
            <div className="chef-title">
                <h2>Chef of the week:</h2>
            </div>
            {isLoading ? (
                <p>Loading Chef Data...</p>
            ) : (
                <>
                    <div className="about-chef-section">
                        <div className="chef-info" style={backgroundImage}>
                            <div className="chef-name-wrapper">
                                <h3>
                                    {chefOfTheWeek?.firstName} {chefOfTheWeek?.lastName}
                                </h3>
                            </div>
                        </div>
                        <span className="body-text description">{chefOfTheWeek?.description}</span>
                    </div>
                    <h4 className="chef-restaurants">{chefOfTheWeek?.firstName}'S RESTAURANTS</h4>
                    <div className="restaurants">
                        {chefOfTheWeek?.restaurantCards && (
                            <Carusel
                                items={chefOfTheWeek.restaurantCards}
                                cardType={CardItemType.CHEF_RESTAURANT}
                            />
                        )}
                    </div>
                    <AllRestaurants />
                </>
            )}
        </div>
    );
};

export default ChefOfTheWeek;
