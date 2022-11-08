import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "./BookPage.css";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../../store/reducer/booksSlice";
import BookCard from "../BookCard/BookCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { cartActions } from "../../store/reducer/cartSlice";
import { useNavigate } from "react-router-dom";
export default function BookPage() {
  const { id } = useParams();
  //edit and get the related book from the parent
  const { books } = useSelector((state) => state.booksList);
  const dispatch = useDispatch();
  let book = books.filter((book) => book.id == id);

  //load the book from json server
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const [added, setadded] = useState(false);
  const { cart } = useSelector((state) => state.cartList);
  let selectedClass;

  //track the state of book if it added to cart or not
  useEffect(() => {
    if (added == true) dispatch(cartActions.addToCart(book[0]));
    else dispatch(cartActions.removeFromCart(book[0]));
  }, [added]);

  //add book to card function
  let addCart = (book) => {
    if (added == false) setadded(true);
    else setadded(false);
  };

  let navigate = useNavigate();
  let navigateToShop = () => {
    navigate("/shop");
  };
  return (
    <>
      <div className="row d-flex m-4 ">
        <div className="col-12">
          {" "}
          <span className="">
            <button className="text-sm px-3 fw-semibold title-btn bg-transparent border border-0">
              {" "}
              Home
            </button>{" "}
          </span>
          <i className="arrow  fa-solid fa-arrow-right-long"></i>{" "}
          <span className="">
            <button className="text-sm px-3 fw-semibold title-btn bg-transparent border border-0">
              {" "}
              category
            </button>
          </span>
          <i className="arrow fa-solid fa-arrow-right-long"></i>{" "}
          <span className="text-md  px-3 fw-semibold price">
            {book[0].title}
          </span>
        </div>
      </div>
      <div className="row  d-flex justify-content-around ">
        <div className="col-lg-5 col-10 my-3 d-flex cover-container border">
          <img className="book-cover my-5" src={book[0].imageCover} alt="" />
        </div>
        <div className="col-lg-5 col-10 my-3 cover-container  p-5  border">
          <div className="row book-title h2 px-2 fw-semibold">
            {book[0].title}
          </div>
          <div className="row d-flex">
            <div className="col-lg-6 col-12 my-lg-0 my-2 d-flex">
              <div className="text-black-50 text-sm">Author:</div>
              <div className=" mx-1 fw-semibold text-sm">
                {book[0].author.name}
              </div>
              <small className="mx-3 text-black-50 d-lg-block d-none ">|</small>
            </div>

            <div className="col-lg-6 col-12 my-lg-0 my-2 ">
              <Rating
                name="text-feedback"
                value={book[0].ratingAvg}
                readOnly
                precision={0.5}
                size="big"
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="line"></div>
          </div>
          <div className="row my-4">
            <div className="price  fw-semibold h5">
              {" "}
              $
              {Math.round(
                book[0].price - book[0].priceDiscount * (book[0].price / 100)
              )}
            </div>
            <div className="description">{book[0].description}</div>
          </div>
          <div className="row justify-content-center">
            <div className="line"></div>
          </div>
          <div className="row my-4">
            <div className="col-lg-5  col-12 my-lg-0 my-2">
              <button
                className="rounded-pill add-to-cart-btn "
                onClick={addCart}
              >
                {added ? "Remove From Cart" : "Add to cart"}{" "}
              </button>
            </div>
            <div className="col-lg-5 col-12 my-lg-0 my-2">
              <button className="rounded-pill add-to-watchlist-btn ">
                Add to watchlist
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="line"></div>
          </div>
          <div className="row  d-flex">
            <div className="col-12 my-4 d-flex">
              {" "}
              <div className="text-black-50 text-sm fw-semibold">Category:</div>
              <div className=" mx-1 fw-semibold  text-sm fw-semibold">
                {book[0]["category"].map((item) => (
                  <span className="px-2">{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="line"></div>
          </div>
          <SocialMediaIcons color={true} className="fs-3" />
        </div>
      </div>
      <div className=" mt-5 row d-flex justify-content-center">
        <div className="col-lg-2 col-4 full-desc fw-bold text-center fs-4">
          Description
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-lg-11 col-10 py-lg-5 px-lg-5 py-5  cover-container border ">
          <div className="px-lg-5 description mx-5">
            {" "}
            {book[0].fullDescription}
          </div>
        </div>
      </div>
      <div className="m-5">
        {" "}
        <SectionTitle title="Related products" handleClick={navigateToShop} />
      </div>
      <div className="row  m-5  ">
        {books.map((item, index) => (
          <div key={index} className={`col-lg-3  col-6  mt-4 book2  `}>
            <BookCard className="side-card1" book={item}></BookCard>
          </div>
        ))}
      </div>
    </>
  );
}
