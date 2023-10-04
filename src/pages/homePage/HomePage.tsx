import "./HomePage.scss";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

const Home = () => {
    return (
        <div className="homePage">
            <Header />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;
