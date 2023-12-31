import InfoCard from "../../../../shared/components/InfoCard/InfoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carusel.scss";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import CardItem, { CardItemList } from "../../../../shared/interfaces/CardItem";

const Carusel: React.FC<CardItemList> = ({ items, cardType }) => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                },
            }}
            className="mySwiper"
        >
            {items.map((item: CardItem) => (
                <SwiperSlide className="" key={item.id}>
                    <InfoCard item={item} cardType={cardType} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carusel;
