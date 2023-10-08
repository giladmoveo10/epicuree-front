import FoodCard from "../../../../shared/components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import SwiperItem, { FoodSwiperProps } from "../../../../shared/interfaces/SwiperItem";

const FoodSwiper: React.FC<FoodSwiperProps> = ({ items }) => {
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
            className="mySwiper"
        >
            {items.map((item: SwiperItem) => (
                <SwiperSlide className="swiper-slide" key={item.id}>
                    <FoodCard item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FoodSwiper;
