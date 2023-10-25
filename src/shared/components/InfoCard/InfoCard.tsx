import CardItem from "../../interfaces/CardItem";
import "./InfoCard.scss";

interface InfoCardProps {
    item: CardItem;
}

const InfoCard: React.FC<InfoCardProps> = ({ item }) => {
    const isRestaurant = item.restaurantName;

    return (
        <div className={`card ${isRestaurant ? "restaurant" : "dish"}`}>
            <>
                <img src={item.image} alt={item.title} className="image" />
            </>
            <div className="card-info">
                <div className="card-header">
                    {item.title && <h3 className="item-title">{item.title}</h3>}
                    {item.restaurantName && <h3 className="item-title">{item.restaurantName}</h3>}
                    {item.chefName && <h3 className="chef-name">{item.chefName}</h3>}
                    {item.stars && <h3 className="stars">stars: {item.stars}</h3>}
                </div>
                <div className="description">
                    <>{item.ingredients && <span className="body-text">{item.ingredients}</span>}</>
                    <div className="tags">
                        {item.tags &&
                            item.tags.map(
                                (tag, index) =>
                                    tag && (
                                        <img
                                            key={index}
                                            src={tag}
                                            alt={`Tag ${index + 1}`}
                                            className="tag-pic"
                                        />
                                    )
                            )}
                    </div>
                    {item.rating && <span className="rating">{item.rating}</span>}
                </div>
                <div className="card-footer">{item.price && <h2 className="price">{item.price}</h2>}</div>
            </div>
        </div>
    );
};

export default InfoCard;
