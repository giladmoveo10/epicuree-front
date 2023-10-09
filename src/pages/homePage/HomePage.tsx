import "./HomePage.scss";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import IntroSearch from "./components/IntroSearch/IntroSearch";
import Carusel from "./components/Carusel/Carusel";
import ChefOfTheWeek from "./components/ChefOfTheWeek/ChefOfTheWeek";
import { dishes } from "../../assets/mockdata/signature";

const Home = () => {
    return (
        <div className="homePage">
            <Header />
            <IntroSearch />
            <div className="home-page-content">
                <div className="dish-list">
                    <Carusel items={dishes} />
                </div>
                <ChefOfTheWeek />
                <AboutUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
