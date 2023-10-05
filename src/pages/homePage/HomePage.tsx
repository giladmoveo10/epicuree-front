import "./HomePage.scss";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import homePageConstants from "./constants/homePageConstants";
import AboutUsDesktop from "./components/AboutUsDesktop/AboutUsDesktop";

import { useMediaQuery } from "react-responsive";

const Home = () => {
    const isDesktop = useMediaQuery({ minWidth: homePageConstants.desktopBreakpoint });
    const isMobile = useMediaQuery({ maxWidth: homePageConstants.desktopBreakpoint });

    return (
        <div className="homePage">
            <Header />
            {/* {isDesktop ? <AboutUsDesktop /> : <AboutUs />} */}

            {isDesktop && <AboutUsDesktop />}
            {/* {isMobile && <AboutUs />} */}
            {/* <AboutUs></AboutUs> */}
            {isMobile && <p>asd</p>}
            <Footer />
        </div>
    );
};

export default Home;
