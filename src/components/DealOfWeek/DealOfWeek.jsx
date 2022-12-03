import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import BookCard2 from "../BookCard2/BookCard2";
import "./DealOfWeek.css";
import { getBooks } from "../../store/reducer/booksSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function DealOfWeek() {
  //get the deal of week books from json server
  const [countDown, setCountDown] = useState({
    hour: 12,
    minute: 50,
    second: 3,
  });
  setTimeout(() => {
    if (countDown.second != 0) {
      setCountDown({ ...countDown, second: countDown.second - 1 });
    } else if (countDown.minute != 0) {
      setCountDown({ ...countDown, minute: countDown.minute - 1, second: 59 });
    } else {
      setCountDown({ hour: countDown.hour - 1, minute: 59, second: 59 });
    }
  }, 1000);
  const { books } = useSelector((state) => state.booksList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  let navigate = useNavigate();
  let navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <>
      <div className=" m-5">
        <SectionTitle
          title="Deal Of The Week"
          handleClick={navigateToShop}
        ></SectionTitle>
      </div>

      <div className="row   m-0 d-flex justify-content-center">
        <div className="col-11 col-lg-7  position-relative d-flex justify-content-center align-items-start  deal-week-main ">
          <div className="position-absolute floating-book link wobble-horizontal-on-hover">
            <div className=" d-flex justify-content-center ">
              <img
                src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h1-img1.png"
                width="530"
                height="280"
                className=" elementor-animation-wobble-horizontal attachment-full size-full"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="position-relative">
            <img
              className="deal-week-img border border-red "
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/h1-bg1.jpg"
              alt=""
              width="822"
              height="515"
            />
            <div className="position-absolute  text-container">
              {" "}
              <h2 className=" text-white fw-semibold text-md">
                The Best New
                <br /> Books of January
              </h2>
            </div>

            <div className="position-absolute m-0 text-container1">
              <div className="row  m-0">
                <div className="col-12 mt-5 mx-5  text-end">
                  {" "}
                  <button
                    className="text-sm  fw-semibold px-5 rounded-pill border-0 deal-btn"
                    onClick={navigateToShop}
                  >
                    Hurry the deals run out soon.
                  </button>
                </div>
                <div className="col-12 mx-5 py-2 text-center">
                  {" "}
                  <button
                    className="text-md fw-bolder px-5 fw-semibold rounded-pill  border-0 deal-btn1 text-white"
                    onClick={navigateToShop}
                  >
                    {countDown.hour} <span className="text-danger">H</span> :
                    {countDown.minute}
                    <span className="text-danger">M</span> :{countDown.second}
                    <span className="text-danger">S</span>
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="col-4 py-5 d-none m-0 p-0 d-lg-flex flex-column">
          {books.length != 0 ? (
            <>
              {" "}
              <div className="row m-0 p-0 side-card">
                <BookCard2 book={books[3]} />
              </div>
              <div className="row border side-card "></div>
              <div className="row m-0 p-0 side-card">
                <BookCard2 book={books[5]} />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
