import SwiperItem from "../../interfaces/SwiperItem";
import "./FoodCard.scss";

interface FoodCardProps {
    item: SwiperItem;
}

const FoodCard: React.FC<FoodCardProps> = ({item}) => {
    return (
        <div className="food-card">
            <img src={item.pic} alt={item.title} className="dish-image" />
            <div className="card-info">
                <h3 className="dish-title">{item.title}</h3>
                {item.chefName && <h3 className="chef-name">{item.chefName}</h3>}
                {item.restaurantName && <h3 className="dish-title">{item.restaurantName}</h3>}
                <div className="description">
                    {item.ingredients && <span className="body-text">{item.ingredients}</span>}
                    {item.descriptionPic && (
                        <img src={item.descriptionPic} alt="Description" className="description-pic" />
                    )}
                    {item.price && <h2 className="price">{item.price}</h2>}
                    {item.rating && <span className="rating">{item.rating}</span>}
                    {/* maybe add !== undefined before && */}
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
