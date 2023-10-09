import bannerimg1 from "../../assets/Images/hero-figure1.png";
import { MdOutlineEventSeat } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="bg-red-200">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-screen w-full flex items-center">
            <div>
              <div className="flex justify-center items-center gap-5 p-4 ">
                <div className="pl-14 space-y-5">
                  <p className="text-[#ce1446] text-xl font-semibold">Octobor 21, 2023</p>
                  <h2 className="text-6xl font-extrabold">
                    EVENTS, MEETUPS & <span className="text-[#ce1446]">CONFERENCES</span>
                  </h2>
                  <div className="flex gap-5">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-[#ce1446] font-extrabold">
                        <MdOutlineEventSeat></MdOutlineEventSeat>
                      </span>
                      <p>
                        <span className="font-bold">500</span> Setas{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl text-[#ce1446] font-extrabold">
                        <BsMegaphone></BsMegaphone>
                      </span>
                      <p>
                        <span className="font-bold">10</span> Speakers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl text-[#ce1446] font-extrabold">
                      <CiLocationOn></CiLocationOn>
                    </span>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                  <div className="flex items-center gap-16">
                    <button className="bg-[#ce1446] text-white font-bold rounded text-xl btn hover:btn-outline  ">Book Now</button>
                    <button className="btn btn-outline hover:bg-[#ce1446] text-[#ce1446] text-xl">View Detials</button>
                  </div>
                </div>
                {/* slider-img */}
                <div className="pr-14">
                  <img src={bannerimg1} className="w-full" />
                </div>
                {/* slider-img */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-screen w-full flex items-center">
            <div>
              <div className="flex justify-center items-center gap-5 p-4 ">
                <div className="pl-14 space-y-5">
                  <p className="text-[#ce1446] text-xl font-semibold">December 23, 2023</p>
                  <h2 className="text-6xl font-extrabold"> 
                  Leadership, Excellence  & <span className="text-[#ce1446]">Summit</span>
                  </h2>
                  <div className="flex gap-5">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-[#ce1446] font-extrabold">
                        <MdOutlineEventSeat></MdOutlineEventSeat>
                      </span>
                      <p>
                        <span className="font-bold">300</span> Setas{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl text-[#ce1446] font-extrabold">
                        <BsMegaphone></BsMegaphone>
                      </span>
                      <p>
                        <span className="font-bold">15</span> Speakers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl text-[#ce1446] font-extrabold">
                      <CiLocationOn></CiLocationOn>
                    </span>
                    <p>Chittagong, Bangladesh</p>
                  </div>
                  <div className="flex items-center gap-16">
                    <button className="bg-[#ce1446] text-white font-bold rounded text-xl btn hover:btn-outline  ">Book Now</button>
                    <button className="btn btn-outline hover:bg-[#ce1446] text-[#ce1446] text-xl">View Detials</button>
                  </div>
                </div>
                {/* slider-img */}
                <div className="pr-14">
                  <img src={bannerimg1} className="w-full" />
                </div>
                {/* slider-img */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
