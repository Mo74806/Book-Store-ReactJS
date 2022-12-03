import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "./BookCard.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../store/reducer/booksSlice";

import { cartActions } from "../../store/reducer/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
export default function BookCard(props) {
  const { user } = useSelector((state) => state.userType);
  let navigate = useNavigate();
  let navigateToBook = () => {
    navigate(`/book/${props.book.id}`);
  };
  let navigateToEdit = () => {
    navigate(`/edit/${props.book.id}`);
  };

  let navigateToShop = () => {
    navigate(`/shop`);
  };

  const [added, setadded] = useState("noAction");
  const dispatch = useDispatch();

  //track the state of book if it added to cart or not
  useEffect(() => {
    if (added == true) dispatch(cartActions.addToCart(props.book));
    else if (added == false) dispatch(cartActions.removeFromCart(props.book));
  }, [added]);

  //add book to card function
  let addCart = (book) => {
    console.log("hhjhjhdjhjdh");
    if (added == false || added == "noAction") setadded(true);
    else setadded(false);
  };

  let handleRemove = () => {
    dispatch(deleteBook(props.book.id));
    // console.log("hhhhhhhhhhhhhhhhhhhhhhhh");
    // navigate("/admin");
    // navigateToShop();
  };
  if (!props.book) {
    return null;
  } else
    return (
      <div className={`${props.className} `}>
        <div className={`row book-card linev`}>
          <div className="card-img-container ">
            <div className="group-action">
              <div className="d-flex flex-column">
                {user == "admin" ? (
                  <button
                    className="group-action--btn quick-view"
                    onClick={handleRemove}
                  >
                    <i className="icon fa fa-remove"></i>
                  </button>
                ) : (
                  <button
                    className="group-action--btn quick-view"
                    onClick={navigateToBook}
                  >
                    <i className="icon fa-regular fa-eye"></i>
                  </button>
                )}
                {user == "admin" ? (
                  <button
                    className="group-action--btn quick-view"
                    onClick={navigateToEdit}
                  >
                    <i className="icon fa fa-light fa-pen-to-square"></i>
                  </button>
                ) : added == true ? (
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
          {props.book.priceDiscount!=0&&   <button
                    className="group-action--btn discount quick-view"

                  >
{`${props.book.priceDiscount}%
off`}
                  </button>}
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
            >
              {" "}
            </Rating>
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
