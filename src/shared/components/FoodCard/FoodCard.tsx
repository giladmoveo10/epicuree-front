import DishProps from "../../interfaces/DishProps";
import "./FoodCard.scss";

const FoodCard: React.FC<DishProps> = ({ dish }) => {
    return (
        <div className="food-card">
            <img src={dish.pic} alt={dish.title} className="dish-image" />
            <div className="card-info">
                <h3 className="dish-title">{dish.title}</h3>
                {dish.chefName && <h3 className="chef-name">{dish.chefName}</h3>}
                <div className="description">
                    {dish.ingredients && <span className="body-text">{dish.ingredients}</span>}
                    {dish.descriptionPic && (
                        <img src={dish.descriptionPic} alt="Description" className="description-pic" />
                    )}
                    {dish.price && <h2 className="price">{dish.price}</h2>}
                    {dish.rating && <span className="rating">{dish.rating}</span>}
                    {/* maybe add !== undefined before && */}
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
