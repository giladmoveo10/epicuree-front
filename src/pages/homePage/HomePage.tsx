import "./HomePage.scss";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import IntroSearch from "./components/IntroSearch/IntroSearch";

const Home = () => {
    return (
        <div className="homePage">
            <Header />
            <IntroSearch />
            <div className="home-page-content">
                <AboutUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
