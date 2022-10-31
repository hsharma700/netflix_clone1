import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {IoPlay} from "react-icons/io5";
import {VscAdd} from "react-icons/vsc";
import {
  Autoplay,
  EffectCube,
  EffectCoverflow,
  EffectCards,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "./Home.scss";

export function Banner({ data }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect={"fade"}
      modules={[
        EffectFade,
        Navigation,
        Pagination,
        Autoplay,
        EffectCube,
        EffectCards,
        EffectCoverflow,
      ]}
      className="swiper"
    >
      {data &&
        data?.results?.map((data, index) => (
          <SwiperSlide key={index}>
            <img
              src={`http://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt=""
            />
            <div className="bannerTitleDiv">
              <div>
                <h2>{data.title}</h2>
                <p>{data.overview}</p>
                <div>
                  <button><IoPlay/>Play</button>
                  <button>My List <VscAdd/></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
