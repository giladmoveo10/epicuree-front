import CardItem from "../../interfaces/CardItem";
import "./InfoCard.scss";

interface InfoCardProps {
    item: CardItem;
}

const InfoCard: React.FC<InfoCardProps> = ({ item }) => {
    const isRestaurant = item.restaurantName;

    return (
        <div className={`card ${isRestaurant ? "restaurant" : "dish"}`}>
            <img src={item.image} alt={item.title} className="image" />
            <div className="card-info">
                {item.title && <h3 className="item-title">{item.title}</h3>}
                {item.restaurantName && <h3 className="item-title">{item.restaurantName}</h3>}
                {item.chefName && <h3 className="chef-name">{item.chefName}</h3>}
                <div className="description">
                    {item.ingredients && <span className="body-text">{item.ingredients[0]}</span>}
                    {item.descriptionPic && (
                        <img src={item.descriptionPic} alt="Description" className="description-pic" />
                    )}
                    {item.price && <h2 className="price">{item.price}</h2>}
                    {item.rating && <span className="rating">{item.rating}</span>}
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
