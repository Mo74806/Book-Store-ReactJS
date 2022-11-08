import React from "react";
import { NavLink } from "react-router-dom";
import "./MyNav.css";
import { useSelector } from "react-redux";
export default function MyNav() {
  const { cart } = useSelector((state) => state.cartList);
  return (
    <>
      <div className=" navbar-component sticky-top">
        <div className="navbar area">
          <div className="brand fs-2 mx-auto mx-md-0 fw-bolder">
            <i className="fas fa-books"></i>Bookory
          </div>
          <nav role="navigation" id="navigation" className="list">
            <div className="item-link py-2  px-3 text-sm ">
              {" "}
              <NavLink
                to="/home"
                activeClassName=".active"
                className={"bar-item"}
              >
                <div>Home</div>
              </NavLink>
            </div>
            <div className="item-link py-2 px-3 text-sm  ">
              <NavLink
                to="/shop"
                className={"bar-item"}
                activeClassName=".active"
              >
                {" "}
                <div>Shop</div>
              </NavLink>
            </div>
            <div className="item-link py-2 px-3 text-sm  ">
              <NavLink
                to="/contact"
                className={"bar-item"}
                activeClassName=".active"
              >
                {" "}
                <div>Contact</div>
              </NavLink>
            </div>{" "}
            <div className="item-link py-2 px-3 text-sm ">About</div>
            <div className=" px-3 text-sm ">
              <NavLink
                to="/cart"
                className={"bar-item"}
                activeClassName=".active"
              >
                {" "}
                <div>
                  <span className="cartNum w-100 text-sm">{cart.length}</span>

                  <i className=" py-2 fa fs-3 fa-cart-shopping cart-nav text-dark"></i>
                </div>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
