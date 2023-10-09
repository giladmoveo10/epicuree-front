import InfoCard from "../../../../shared/components/InfoCard/InfoCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import CardItem, { CardItemList } from "../../../../shared/interfaces/CardItem";

const Carusel: React.FC<CardItemList> = ({ items }) => {
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
            {items.map((item: CardItem) => (
                <SwiperSlide className="swiper-slide" key={item.id}>
                    <InfoCard item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carusel;
