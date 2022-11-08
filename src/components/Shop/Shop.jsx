import React from "react";
import BookCard from "../BookCard/BookCard";
import FilterOption from "../FilterOption/FilterOption";
import FilterRange from "../FilterRange/FilterRange";
import FilterReview from "../FilterReview/FilterReview";
import "./Shop.css";
import FeaturedBooks from "../FeaturedBooks/FeaturedBooks";
import { useEffect } from "react";
import { getBooks } from "../../store/reducer/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PageMainTitle from "../PageMainTitle/PageMainTitle";
export default function Shop() {
  const [filtered, setFiltered] = useState([]);
  const [filterBackup, setBackup] = useState([]);
  const { books } = useSelector((state) => state.booksList);

  //read the books from json server
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  //in the beging set the filtered books to the books came from server
  useEffect(() => {
    setFiltered(books);
    setBackup(books);
  }, [books]);

  //set the filtered books with returned books after filteration operation
  let filterBooks = (books) => {
    setFiltered(books);
  };
  //function to remove duplication from array
  function getUniqueArray(_array) {
    let newArray = _array.filter(
      (element, index, array) => array.indexOf(element) === index
    );
    return newArray;
  }
  //handle category filter and get only the book that match the passed categories
  let filterBookscategory = async (filtersArray) => {
    let updatedBooks;
    let bigArray = [];
    filtersArray.map((category) => {
      updatedBooks = books.filter((book) => book.category.includes(category));
      bigArray = [...bigArray, ...updatedBooks];
    });
    let updatedBooks1 = getUniqueArray(bigArray);
    if (updatedBooks1.length != 0) {
      setFiltered(updatedBooks1);
      setBackup(updatedBooks1);
    } else {
      setFiltered(books);
      setBackup(books);
    }
  };
  return (
    <>
      <PageMainTitle title="Shop" />
      <div className="row d-flex justify-content-center  mx-4  mb-5 ">
        <div className="col-3 d-xl-block d-none filter-section">
          <FilterOption
            name="Genere"
            options={[
              "Action & Adventure",
              "Activity Books",
              "Animals",
              "Anthologies",
              "Arts & Literature",
              "Cars & Trucks",
              "Classics",
              "Contemporary",
              "Cultural",
              "European",
              "Foreign Language",
              "Genre Fiction",
              "Historical",
            ]}
            handleFilter={(filtersArray) => {
              filterBookscategory(filtersArray);
            }}
            books={books}
          />
          <div className="row my-2"></div>
          <FilterRange
            name="price"
            min={0}
            max={1000}
            handleFilter={(updatedBooks) => {
              filterBooks(updatedBooks);
            }}
            booksData={filterBackup}
          />
          <div className="row my-2"></div>
          <FilterReview
            handleFilter={(updatedBooks) => {
              filterBooks(updatedBooks);
            }}
            booksData={filterBackup}
          />
          <div className="row my-2"></div>

          <FeaturedBooks books={books} />
          <div className="row my-4"></div>
        </div>
        <div className="col-lg-9  col-12  text-center">
          <div className="row d-flex-justify-content-center px-md-5 p-xs-5  m-0 ">
            {filtered.length != 0 ? (
              filtered.map((item, index) => (
                <div
                  key={index}
                  className={`col-xl-4  col-md-6 col-sm-6  col-xs-6 p-xs-5    mt-4 book2 ${
                    !((index + 1) % 3 === 0) && "book1"
                  } `}
                >
                  <BookCard className="side-card1" book={item}></BookCard>
                </div>
              ))
            ) : (
              <div className="col-9 w-100 fs-1 text-black fw-bolder">
                <div className="row">
                  <i className="fa-solid fas fa-person-dolly-empty"></i>{" "}
                </div>{" "}
                No Books Matched!!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
