import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "./BookCard2.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/reducer/cartSlice";

export default function BookCard2(props) {
  let navigate = useNavigate();
  let navigateToBook = () => {
    navigate(`/book/${props.book.id}`);
  };

  const [added, setadded] = useState(false);
  const { cart } = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  let selectedClass;

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
    <div className={`${props.className}`}>
      <div className={`row book-card `}>
        <div className="col-7 card-img-container ">
          <div className="group-action">
            <div className="d-flex flex-column">
              <button
                className="group-action--btn quick-view"
                onClick={navigateToBook}
              >
                <i className="icon fa-regular fa-eye"></i>
              </button>
              {added ? (
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
          <img src={props.book.imageCover} alt="" className="card-img1" />
        </div>

        <div className="col-4  card-details pt-2 ">
          <div className="row">
            {" "}
            <div className="fw-semibold fs-6 border border-0  pt-2">
              {props.book.title}
            </div>
          </div>
          <div className="author   text-muted"> {props.book.author.name}</div>

          <div className=" rating py-2 row ">
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
          <div className="row my-5 align-items-center">
            <div className="col-12 price px-3 fs-4  fw-semibold price">
              ${props.book.price}
            </div>
            <div className="col-12   price-before-discount  fw-semibold fs-7  text-black-50">
              $ {props.book.priceDiscount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
