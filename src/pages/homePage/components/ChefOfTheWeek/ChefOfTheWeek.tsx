import "./ChefOfTheWeek.scss";
import { chefOfTheWeek } from "../../../../assets/mockdata/chefData";

const ChefOfTheWeek: React.FC = () => {
    return (
        <div className="chef-container">
            <h2>CHEF OF THE WEEK:</h2>
            <div className="chef-info">
                <img
                    src={chefOfTheWeek.pictureOfChef}
                    alt={`${chefOfTheWeek.chefFirstName} ${chefOfTheWeek.chefLastName}`}
                    className="chef-image"
                />
                <h3>
                    {chefOfTheWeek.chefFirstName} {chefOfTheWeek.chefLastName}
                </h3>
                <span className="body-text description">{chefOfTheWeek.description}</span>
            </div>
            <h4 className="chef-restaurants">{chefOfTheWeek.chefFirstName}’S RESTAURANTS</h4>
            <div className="restaurants">
                {chefOfTheWeek.restaurants.map((restaurant) => (
                    <div key={restaurant.nameOfRestaurant} className="restaurant">
                        <img src={restaurant.pictureOfRestaurant} alt={restaurant.nameOfRestaurant} />
                        <h5>{restaurant.nameOfRestaurant}</h5>
                    </div>
                ))}
            </div>
            <a href="#">All Restaurants </a>
        </div>
    );
};

export default ChefOfTheWeek;
