import "./ChefOfTheWeek.scss";
import Carusel from "../Carusel/Carusel";
import AllRestaurants from "../AllRestaurants/AllRestaurants";
import { useEffect, useState } from "react";
import { fetchChefs } from "../../apiHomePage";
import { Chef } from "../../../../shared/interfaces/Chef";

const ChefOfTheWeek: React.FC = () => {
    const [chefOfTheWeek, setChefOfTheWeek] = useState<Chef | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const chefs = await fetchChefs();
            if (chefs) {
                setChefOfTheWeek(chefs[0]); // plaster for now
            }
        };

        fetchData();
    }, []);

    const backgroundImage = chefOfTheWeek ? { backgroundImage: `url(${chefOfTheWeek.image})` } : {};

    return (
        <div className="chef-container">
            <div className="chef-title">
                <h2>CHEF OF THE WEEK:</h2>
            </div>
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
                {chefOfTheWeek?.restaurantCards && <Carusel items={chefOfTheWeek.restaurantCards} />}
            </div>
            <AllRestaurants />
        </div>
    );
};

export default ChefOfTheWeek;
