import "./IntroSearch.scss";
import Yami from "../../../../assets/images/yami.png";
import SearchOnPhoto from "../../../../assets/images/search-on-photo.png";

function IntroSearch() {
    return (
        <div className="intro-search">
            <img src={Yami} alt="Background" className="background-image" />
            <div className="content-wrapper">
                <img src={SearchOnPhoto} alt="Epicure search box" className="search-box" />
            </div>
        </div>
    );
}

export default IntroSearch;
