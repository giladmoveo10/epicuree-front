import { dishes } from "../../../../assets/mockdata/signature";
import FoodCard from "../../../../shared/components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
import 'swiper/scss/navigation';

const FoodSwiper: React.FC = () => {
    // isDesktop is used to determine the number of slides per view
    // slidesPerView={3} for desktop -> conditionally render it

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            // pagination={{
            //     clickable: true,
            // }} // dots below the swipers
            modules={[Pagination]}
            className="mySwiper"
        >
            {dishes.map((dish) => (
                <SwiperSlide className="swiper-slide" key={dish.id}>
                    <FoodCard dish={dish} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FoodSwiper;
