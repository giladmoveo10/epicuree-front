import CardItem, { CardItemType } from "../../interfaces/CardItem";
import icons from "../../services/icons.service";
import "./InfoCard.scss";

interface InfoCardProps {
    item: CardItem;
    cardType: CardItemType;
}

const InfoCard: React.FC<InfoCardProps> = ({ item, cardType }) => {
    const type = cardType;

    return (
        <div className={`card ${type}`}>
            <>
                <img src={item.image} alt={item.title} className="image" />
            </>
            <div className="card-info">
                <div className="card-header">
                    {item.title && <h3 className="item-title">{item.title}</h3>}
                    {item.restaurantName && <h3 className="item-title">{item.restaurantName}</h3>}
                    {item.chefName && <span className="chef-name body-text">{item.chefName}</span>}
                    {cardType === CardItemType.POPULAR_RESTAURANT && item.stars && (
                        <div className="stars body-text">stars: {item.stars} / 5</div>
                    )}
                </div>
                <div className="description">
                    <>{item.ingredients && <span className="body-text">{item.ingredients}</span>}</>
                    <div className="tags">
                        {item.tags &&
                            item.tags.map(
                                (tagName, index) =>
                                    tagName && (
                                        <img
                                            key={index}
                                            src={icons[tagName]}
                                            alt={`Tag ${tagName}`}
                                            className="tag-pic"
                                        />
                                    )
                            )}
                    </div>
                    {/* <img src={icons["Spicy"]} alt="" /> */}
                    {item.rating && <span className="rating">{item.rating}</span>}
                </div>
                <div className="card-footer">{item.price && <h2 className="price">{item.price}</h2>}</div>
            </div>
        </div>
    );
};

export default InfoCard;
