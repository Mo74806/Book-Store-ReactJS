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
      <div >
        <div className="col-xl-12  col-12 px-xg-0  px-5 py-3 d-flex justify-content-center ">
          <div className="row d-flex justify-content-center    m-0 ">
            {books
              ? books.map(
                  (item, index) =>
                    index <= 5 && (
                      <div
                        key={index}
                        className={`col-xl-4  col-md-4 col-sm-3  col-xs-6 p-xs-5    mt-4 book2 ${
                          !((index + 1) % 3 === 0) && "book1"
                        } `}
                      >
                        <BookCard className="side-card1" book={item}></BookCard>
                      </div>
                    )
                )
              : null}
          </div>

        <div className="col-3 d-none d-xl-block">
          <div className="  ads ">
            <div className="  m-0  d-flex   text- fw-bold fs-1 ">

            </div>
          
          </div>
        </div>
      </div>
    </div>
            </div>
  );
}
