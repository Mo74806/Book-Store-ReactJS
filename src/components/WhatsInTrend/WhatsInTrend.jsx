import React from "react";
import BookCard2 from "../BookCard2/BookCard2";
import SectionTitle from "../SectionTitle/SectionTitle";
import { getBooks } from "../../store/reducer/booksSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./WhatsInTrend.css";
export default function WhatsInTrend() {
  //edit to get global book state
  const { books } = useSelector((state) => state.booksList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="m-0 mb-5">
      {" "}
      <div className="row m-0 mx-5">
        <div className="mb-3">
          <SectionTitle title="What's In Trend"></SectionTitle>
        </div>
        <div className="row d-flex align-items-center  p-5 justify-content-center">
          <div className="col-lg-5 col-10 p-5 my-2 mx-3 trend border">
            {books.length !== 0 ? <BookCard2 book={books[1]} /> : null}
          </div>
          <div className="col-lg-5 col-10 p-5 my-2 mx-3 trend border">
            {books.length !== 0 ? <BookCard2 book={books[2]} /> : null}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
