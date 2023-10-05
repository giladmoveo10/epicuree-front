import "./AboutUsDesktop.scss";
import AboutLogo from "../../../../assets/images/about-logo-big.svg";
import AppStore from "../../../../assets/images/App-Store.png";
import GooglePlay from "../../../../assets/images/Google-Play.png";

import homePageConstants from "../../constants/homePageConstants";

function AboutUsDesktop() {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <div>
                    <h2>ABOUT US:</h2>
                    <p className="body-text about-us-text">{homePageConstants.aboutUsText}</p>
                    <p className="body-text about-us-text">{homePageConstants.aboutUsText2}</p>
                </div>
                <div className="stores">
                    <img src={AppStore} alt="App Store" className="app-store" />
                    <img src={GooglePlay} alt="Google Play" className="google-play" />
                </div>
            </div>
            <div className="logo-container">
                <img src={AboutLogo} alt="about logo" className="epicure-logo" />
            </div>
        </div>
    );
}

export default AboutUsDesktop;
