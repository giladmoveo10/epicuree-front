import "./AboutUs.scss";
import AboutLogo from "../../../../assets/images/about-logo.svg";
import AppStore from "../../../../assets/images/App-Store.png";
import GooglePlay from "../../../../assets/images/Google-Play.png";

import homePageConstants from "../../constants/homePageConstants";

function AboutUs() {
    return (
        <div className="about-us-container">
            <div>
                <img src={AboutLogo} alt="about logo" className="epicure-logo" />
            </div>
            <div className="about-us-content">
                <div className="stores">
                    <img src={AppStore} alt="App Store" className="app-store" />
                    <img src={GooglePlay} alt="Google Play" className="google-play" />
                </div>
                <div>
                    <h2>ABOUT US:</h2>
                    <p className="body-text about-us-text">{homePageConstants.aboutUsText}</p>
                    <p className="body-text about-us-text-2">{homePageConstants.aboutUsText2}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
