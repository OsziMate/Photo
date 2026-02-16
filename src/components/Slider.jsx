import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Slider = ({
  data,
  renderItem,
  prevId,
  nextId,
  paginationClass,
}) => {
  return (
    <div className="slider-container">
      <div className="swiper-prev" id={prevId}>{"<"}</div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation={{
          prevEl: `#${prevId}`,
          nextEl: `#${nextId}`,
        }}
        pagination={{
          clickable: true,
          el: `.${paginationClass}`,
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          500: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-next" id={nextId}>{">"}</div>
      <div className={`custom-pagination ${paginationClass}`} />
    </div>
  );
};

export default Slider;
