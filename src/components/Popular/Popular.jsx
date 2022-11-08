import React from "react";
import BookCard from "../BookCard/BookCard";
import "./Popular.css";
import { useEffect } from "react";
import { getBooks } from "../../store/reducer/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../SectionTitle/SectionTitle";
export default function Popular() {
  //get the popular book
  const { books } = useSelector((state) => state.booksList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="pb-5">
      <div className="row m-5">
        <div className="my-3">
          <SectionTitle title="Popular Books"></SectionTitle>
        </div>
      </div>
      <div className="row m-0 ">
        <div className="col-8">
          <div className="row d-flex-justify-content-center px-md-5 p-xs-5  m-0 ">
            {books
              ? books.map(
                  (item, index) =>
                    index <= 5 && (
                      <div
                        key={index}
                        className={`col-xl-4  col-md-6 col-sm-6  col-xs-6 p-xs-5    mt-4 book2 ${
                          !((index + 1) % 3 === 0) && "book1"
                        } `}
                      >
                        <BookCard className="side-card1" book={item}></BookCard>
                      </div>
                    )
                )
              : null}
          </div>
        </div>
        <div className="col-3">
          <div className="row ads mt-5 py-5">
            <div className="sale px-5  d-flex align-items-center pt-5 mt-5 fw-bold fs-1 text-white">
              Save <span className="bg-black px-3 py-2 text-danger">50%</span>
            </div>
            <div className="fw-bold fs-1 px-5 fw-bolder text-white">
              Find Book you love
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
