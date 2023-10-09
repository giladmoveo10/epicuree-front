import "./ChefOfTheWeek.scss";
import { chefOfTheWeek } from "../../../../assets/mockdata/chefData";
import Carusel from "../Carusel/Carusel";
import AllRestaurants from "../AllRestaurants/AllRestaurants";

const ChefOfTheWeek: React.FC = () => {
    return (
        <div className="chef-container">
            <h2>CHEF OF THE WEEK:</h2>
            <div className="chef-info">
                <div className="chef-name-wrapper">
                    <h3>
                        {chefOfTheWeek.chefFirstName} {chefOfTheWeek.chefLastName}
                    </h3>
                </div>
            </div>
            <span className="body-text description">{chefOfTheWeek.description}</span>
            <h4 className="chef-restaurants">{chefOfTheWeek.chefFirstName}'S RESTAURANTS</h4>
            <div className="restaurants">
                <Carusel items={chefOfTheWeek.restaurants} />
            </div>
            <AllRestaurants />
        </div>
    );
};

export default ChefOfTheWeek;
