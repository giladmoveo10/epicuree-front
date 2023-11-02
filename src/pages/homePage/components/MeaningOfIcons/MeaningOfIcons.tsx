// import "./meaningOfIcons.scss";
import SpicyIcon from "../../../../assets/icons/spicyIcon.svg";
import VegetarianIcon from "../../../../assets/icons/vegiIcon.svg";
import VeganIcon from "../../../../assets/icons/veganIcon.svg";
import "./MeaningOfIcons.scss";

const MeaningOfIcons: React.FC = () => {
    return (
        <div className="icon-meaning-container">
            <h2 className="title">the meaning of our icons:</h2>
            <div className="icons">
                <div className="icon-meaning-item">
                    <img className="image" src={SpicyIcon} alt="Spicy" />
                    <span className="body-text">Spicy</span>
                </div>

                <div className="icon-meaning-item">
                    <img className="image" src={VegetarianIcon} alt="Vegetarian" />
                    <span className="body-text">Vegetarian</span>
                </div>

                <div className="icon-meaning-item">
                    <img className="image" src={VeganIcon} alt="Vegan" />
                    <span className="body-text">Vegan</span>
                </div>
            </div>
        </div>
    );
};

export default MeaningOfIcons;
