import { dishes } from "../../../../assets/mockdata/signature";
import FoodCard from "../../../../shared/components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

const FoodSwiper: React.FC = () => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
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
