import "./HomePage.scss";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import IntroSearch from "./components/IntroSearch/IntroSearch";
import Carusel from "./components/Carusel/Carusel";
import ChefOfTheWeek from "./components/ChefOfTheWeek/ChefOfTheWeek";
import { useEffect, useState } from "react";
import { fetchDishes, transformToCardItem } from "./apiHomePage";
import { Dish } from "../../shared/interfaces/Dish";
import CardItem, { CardItemList } from "../../shared/interfaces/CardItem";

const Home = () => {
    const [loadedDishes, setloadedDishes] = useState<CardItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getDishes = async () => {
            try {
                setIsLoading(true);
                const dishess = await fetchDishes();
                setloadedDishes(transformToCardItem(dishess));
            } catch (error) {
                console.log(error);
                // throw error;
            }
        };

        getDishes();

        // fetchDishes().then((data) => {
        //     setloadedDishes(data);
        //     setIsLoading(false);
        // }).catch((error) => {
        //     console.log(error);
        // })
    }, []);

    return (
        <div className="homePage">
            <Header />
            <IntroSearch />
            <div className="home-page-content">
                <div className="dish-list">
                    <Carusel items={loadedDishes} />
                </div>
                <ChefOfTheWeek />
                <AboutUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
