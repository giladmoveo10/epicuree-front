import "./HomePage.scss";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import IntroSearch from "./components/IntroSearch/IntroSearch";
import Carusel from "./components/Carusel/Carusel";
import ChefOfTheWeek from "./components/ChefOfTheWeek/ChefOfTheWeek";
import PopularRestaurants from "./components/PopularRestaurants/PopularRestaurants";
import { useEffect, useState } from "react";
import { transformDishToCardItem, fetchSignatureDishes } from "./apiHomePage";
import CardItem, { CardItemType } from "../../shared/interfaces/CardItem";
import MeaningOfIcons from "./components/MeaningOfIcons/MeaningOfIcons";

const Home = () => {
    const [loadedDishes, setloadedDishes] = useState<CardItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getSigDishes = async () => {
            try {
                setIsLoading(true);
                const dishes = await fetchSignatureDishes();
                setloadedDishes(transformDishToCardItem(dishes));
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        getSigDishes();
    }, []);

    return (
        <div className="homePage">
            <Header />
            <IntroSearch />
            <div className="home-page-content">
                <PopularRestaurants />
                <div className="signature-list">
                    <h2 className="signature-dish-title">Signature Dish of:</h2>
                    {isLoading ? (
                        <p>Loading Signature Dishes</p>
                    ) : (
                        <Carusel items={loadedDishes} cardType={CardItemType.DISH} />
                    )}
                </div>

                <MeaningOfIcons />
                <ChefOfTheWeek />
            </div>
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;
