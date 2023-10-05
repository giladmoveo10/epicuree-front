import "./HomePage.scss";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
// import homePageConstants from "./constants/homePageConstants";

// import { useMediaQuery } from "react-responsive";

const Home = () => {
    return (
        <div className="homePage">
            <Header />
            <div className="home-page-content">
                <AboutUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
