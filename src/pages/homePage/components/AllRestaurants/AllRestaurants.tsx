import "./AllRestaurants.scss";
import Arrows from "../../../../assets/icons/arrows-restaurants.svg";

const AllRestaurants: React.FC = () => {
    return (
        <div>
            <a className="restaurants-link" href="/">
                <h3 className="title">All Restaurants</h3>
                <img className="arrow-icon" alt="" src={Arrows}></img>
            </a>
        </div>
    );
};

export default AllRestaurants;
