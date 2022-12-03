import React from "react";
import SingleItemDetails from "../SingleItemDetails/SingleItemDetails";
import "./CartDetails.css";
import SingleItemDetailsSide from "../SingleItemDetailsSide/SingleItemDetailsSide";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import PageMainTitle from "../PageMainTitle/PageMainTitle";
import { cartActions } from "../../store/reducer/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export default function CartDetails() {
  const { cart } = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  let Qty = 0;

  // useEffect(()=>{cartActions},[cart])
  //track the state of book if it added to cart or not
  console.log(cart);
  let totalPrice = 0;
  let totalDiscount = 0;
  //convert to function
  for (let i = 0; i < cart.length; i++) {
    totalPrice += parseInt(cart[i].price);
    totalDiscount +=
      parseInt(cart[i].priceDiscount) * (parseInt(cart[i].price) / 100);
    Qty += cart[i].qty;
  }

  return (
    <>
      <PageMainTitle title="Cart" />{" "}
      <div className="row m-5 d-flex justify-content-center">
        <div className="col-lg-7 my-5 my-lg-0 col-12 px-5 book1 ">
          {cart.length != 0 &&
            cart.map((book, index) => (
              <div key={index} className="line-under">
                <SingleItemDetails book={book} />
              </div>
            ))}
        </div>
        <div className="col-lg-5 side-card col-10 my-lg-0 my-5 px-5 py-3 bg-white rounded">
          <div className="title fw-semibold fs-3">Total</div>
          <div className="mb-4 side-details">
            {" "}
            {cart.length != 0 &&
              cart.map((book, index) => (
                <div key={index} className="line-under">
                  <SingleItemDetailsSide book={book} />
                </div>
              ))}
          </div>
          <div className="price-summary">
            <div className=" row">
              <div className="col-7 px-1">
                <TextField
                  fullWidth={true}
                  id="cupon-code"
                  label="Cupon Code"
                  variant="outlined"
                />
              </div>
              <div className="col-5  px-1 fw-bold fs-7">
                <button className="bg-grey fw-semibold btn-outline">
                  ADD CODE
                </button>
              </div>
            </div>
            <div className="cupon"></div>
            <div className="row justify-content-between d-flex my-3">
              <div className="col-3">Subtotal</div>
              <div className="col-2  text-sm">${totalPrice}</div>
            </div>
            <div className=" row justify-content-between d-flex my-3">
              <div className="col-3 text-start ">Discount</div>
              <div className="col-2  text-sm">${totalDiscount * Qty}</div>
            </div>
            <div className="cupon"></div>
            <div className=" row my-3">
              <div className="col-3 text-start fw-bold fs-5">Total</div>
              <div className="col-8 text-end fw-semibold price">
                ${totalPrice * Qty - totalDiscount * Qty}
              </div>
            </div>
          </div>
          <div className="row mt-2 ">
            <div className="col-12   text-end  ">
              <button className=" py-2 text-ceneter proceed-buy-button fw-semibold text-sm px-3 py-3">
                PROCEED PAYMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
