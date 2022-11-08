import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SwiperBooks from "../SwiperBooks/SwiperBooks";
import { useNavigate } from "react-router-dom";
export default function SwiperSection() {
  let navigate = useNavigate();
  let navigateToShop = () => {
    navigate("/shop");
  };

  // make the swiper take the book to shaw
  return (
    <>
      <div className="row m-5">
        <div className="my-3">
          <SectionTitle
            title="Trending Books"
            handleClick={navigateToShop}
          ></SectionTitle>
        </div>
        <div className="row px-5">
          {" "}
          <SwiperBooks />
        </div>
      </div>
    </>
  );
}
