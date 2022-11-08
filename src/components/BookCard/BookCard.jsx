import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "./BookCard.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/reducer/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function BookCard(props) {
  let isAdmin = true;

  let navigate = useNavigate();
  let navigateToBook = () => {
    navigate(`/book/${props.book.id}`);
  };
  let navigateToEdit = () => {
    navigate(`/edit/${props.book.id}`);
  };

  const [added, setadded] = useState(false);
  const dispatch = useDispatch();

  //track the state of book if it added to cart or not
  useEffect(() => {
    if (added == true) dispatch(cartActions.addToCart(props.book));
    else dispatch(cartActions.removeFromCart(props.book));
  }, [added]);

  //add book to card function
  let addCart = (book) => {
    if (added == false) setadded(true);
    else setadded(false);
  };

  return (
    <div className={`${props.className} `}>
      <div className={`row book-card linev`}>
        <div className="card-img-container ">
          <div className="group-action">
            <div className="d-flex flex-column">
              <button
                className="group-action--btn quick-view"
                onClick={navigateToBook}
              >
                <i className="icon fa-regular fa-eye"></i>
              </button>
              {isAdmin ? (
                <button
                  className="group-action--btn quick-view"
                  onClick={navigateToEdit}
                >
                  <i class="icon fa fa-light fa-pen-to-square"></i>
                </button>
              ) : added ? (
                <button
                  onClick={() => addCart(props.book)}
                  className="group-action--btn toggle-cart"
                >
                  <i className="fa fa-cart-shopping text-danger cart-nav"></i>
                </button>
              ) : (
                <button
                  onClick={() => addCart(props.book)}
                  className="group-action--btn toggle-cart"
                >
                  <i className="fa fa-cart-shopping cart-nav"></i>
                </button>
              )}
            </div>
          </div>
          <img src={props.book.imageCover} alt="" className="card-img" />
        </div>
      </div>
      <div className="card-details  m-0 row">
        <div className="title1 m-0 p-0 text-nowrap overflow-hidden fw-semibold text-start fs-5 border border-0  mt-2">
          <button
            className="bg-transparent border border-0 m-0 p-0 text-start fw-semibold"
            onClick={navigateToBook}
          >
            {props.book.title || "title of book"}
          </button>
        </div>
        <div className=" rating px-3 row ">
          <Rating
            className="rating"
            name="text-feedback"
            value={props.book.ratingAvg}
            readOnly
            precision={0.5}
            size="small"
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </div>
        <div className="author text-start  py-2 mt-2 text-muted">
          {props.book.author.name || "author name"}
        </div>
        <div className="row  align-items-center">
          <div className="col-7 text-start price  fs-4  fw-semibold price">
            ${" "}
            {Math.round(
              props.book.price -
                props.book.priceDiscount * (props.book.price / 100)
            )}
          </div>
          {props.book.priceDiscount !== 0 && (
            <div className="col-3 text-start  price-before-discount fw-semibold fs-7    text-black-50">
              ${props.book.price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
