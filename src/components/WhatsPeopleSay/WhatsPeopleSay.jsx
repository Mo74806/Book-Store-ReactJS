import React from "react";
import "./WhatsPeopleSay.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

export default function WhatsPeopleSay() {
  SwiperCore.use([Autoplay]);

  return (
    <div className="comment m-0 py-2 row d-none d-xl-block">
      <div className="">
        <div className="col-lg-5 my-5 col-10 comments m-5">
          <Swiper
            loop={true}
            autoplay={{
              delay: 900,
              disableOnInteraction: false,
            }}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
            breakpoints={{
              1300: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
          >
            {[0, 1, 2].map((book, index) => (
              <SwiperSlide key={index} >
                {" "}
                <div className="row  pt-5 d-flex justify-content-center m-auto mt-5 d-flex justify-content-center fw-semibold text-black-50 comment-underline">
                  What People Say
                </div>
                <div className="row d-flex justify-content-center">
                  {" "}
                  <div className="col-10   text-center mt-5 fw-semibold">
                    <span className="fs-4">"</span> Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Labore esse tenetur odit,
                    magnam illo dicta provident? Necessitatibus rerum quidem
                    quisquam, natus, ut officia quo minima voluptatem pariatur
                    mollitia molestias repellat!"<span className="fs-4">"</span>
                    <div className="row d-flex justify-content-center m-auto mt-5 d-flex justify-content-center price mb-5 ">
                      - Person Name
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
