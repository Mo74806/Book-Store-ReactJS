import React from "react";
import { cartActions } from "../../store/reducer/cartSlice";
import { useSelector, useDispatch } from "react-redux";
export default function SingleItemDetails(props) {
  // const { cart } = useSelector((state) => state.cartList);
  const dispatch = useDispatch();

  //increase Qty of books
  let handleAdd = () => {
    dispatch(cartActions.increaseQty(props.book));
  };
  //decrease Qty of books
  let handleRemove = () => {
    dispatch(cartActions.DecreaseQty(props.book));
  };
  return (
    <>
      <div className="item-cart-details my-4 row   d-flex  align-items-center">
        <div className="col-3 item-img">
          <img src={props.book.imageCover} alt="" />
        </div>
        <div className="item-title col-3 ">
          <div className="fw-semibold">{props.book.title}</div>
          <div className="author text-black-50">{props.book.author.name}</div>
        </div>

        <div className="item-price col-2 fw-bold text-danger">
          ${props.book.price}
        </div>
        <div className="col-4    d-flex ">
          <button className=" item-counter Btn" onClick={handleAdd}>
            +
          </button>
          <div className="item-counter text-center fw-bold pt-1 ">
            {props.book.qty}
          </div>
          <button className=" item-counter Btn" onClick={handleRemove}>
            -
          </button>
        </div>
      </div>
    </>
  );
}
