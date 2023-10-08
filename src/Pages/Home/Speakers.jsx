// speakers img

import speaker1 from "../../assets/Images/New folder (3)/pexels-photo-1181391.webp";
import speaker2 from "../../assets/Images/New folder (3)/pexels-photo-2182970.webp";
import speaker3 from "../../assets/Images/New folder (3)/pexels-photo-3277806.jpeg";
import speaker5 from "../../assets/Images/New folder (3)/pexels-photo-4467687.webp";
import speaker6 from "../../assets/Images/New folder (3)/pexels-photo-8067767.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Speakers = () => {
  return (
    <div className="mt-14 w-11/12 mx-auto">
      <h2 className="text-5xl text-center mb-10 font-extrabold uppercase">
        Our TALENTED <span className="text-[#ce1446]">SPEAKERS</span>
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="p-5 h-1/4">
            <img src={speaker1} className="w-full h-1/4" alt="" />
            <div className="absolute text-center w-[90%] p-3 rounded-md bg-[#ce1446] text-white bottom-5">
              <h2 className="text-2xl font-bold">Jhon Doe</h2>
              <p>Marketing</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 h-1/2">
            <img src={speaker2} className="w-full h-full" alt="" />
            <div className="absolute text-center w-[90%] p-3 rounded-md bg-[#ce1446] text-white bottom-5">
              <h2 className="text-2xl font-bold">Jane Smith</h2>
              <p>AI Researcher</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 h-1/2">
            <img src={speaker3} className="w-full h-full" alt="" />
            <div className="absolute text-center w-[90%] p-3 rounded-md bg-[#ce1446] text-white bottom-5">
              <h2 className="text-2xl font-bold">Michael Johnson</h2>
              <p>Leadership Coach</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 h-1/2">
            <img src={speaker1} className="w-full h-full" alt="" />
            <div className="absolute text-center w-[90%] p-3 rounded-md bg-[#ce1446] text-white bottom-5">
              <h2 className="text-2xl font-bold">Sarah Adams</h2>
              <p>CEO</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 h-full w-full">
            <img src={speaker5} className="w-full h-full" alt="" />
            <div className="absolute text-center w-[90%] p-3 rounded-md bg-[#ce1446] text-white bottom-5">
              <h2 className="text-2xl font-bold">David Brown</h2>
              <p>Marketing Director</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 h-1/2">
            <img src={speaker6} className="w-full h-full" alt="" />
            <div className="absolute text-center w-[90%] p-3 rounded-md bg-[#ce1446] text-white bottom-5">
              <h2 className="text-2xl font-bold">Lisa Anderson</h2>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Speakers;
