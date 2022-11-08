import React from "react";
import { cartActions } from "../../store/reducer/cartSlice";
import { useSelector, useDispatch } from "react-redux";
export default function SingleItemDetailsSide(props) {
  // const { cart } = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  //remove book from cart
  let handleDelete = () => {
    dispatch(cartActions.removeFromCart(props.book));
  };
  return (
    <>
      <div className="row d-flex align-items-center">
        <div className="col-3  item-img d-flex align-items-center ">
          <img className="" src={props.book.imageCover} alt="" />
        </div>
        <div className="item-title col-7 ">
          <div className="text-sm fw-semibold">{props.book.title}</div>
          <div className="item-price text-danger">${props.book.price}</div>
        </div>
        <div className="col-2 text-end fw-bold">
          <button
            onClick={handleDelete}
            className="bg-transparent border border-0"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </>
  );
}
