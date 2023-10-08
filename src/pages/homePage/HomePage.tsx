import "./HomePage.scss";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import IntroSearch from "./components/IntroSearch/IntroSearch";
import FoodSwiper from "./components/FoodSwiper/FoodSwiper";


const Home = () => {
    return (
        <div className="homePage">
            <Header />
            <IntroSearch />
            <div className="home-page-content">
                <div className="dish-list">
                    <FoodSwiper />
                </div>
                <AboutUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
