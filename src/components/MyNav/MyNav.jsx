import React from "react";
import { NavLink } from "react-router-dom";
import "./MyNav.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/reducer/user";
export default function MyNav() {
  const { cart } = useSelector((state) => state.cartList);
  const { user } = useSelector((state) => state.userType);
  let dispatch = useDispatch();
  let cartLength = 0;
  if (cart.length != 0) {
    cart.map((item) => {
      cartLength += item.qty;
    });
  }
  let logout = () => {
    {
      dispatch(userActions.setUser(" "));
    }
  };
  return (
    <>
      {user == "user" ? (
        <div className=" navbar-component sticky-top">
          <div className="navbar area">
            <div className="brand  fs-2 my-2 mx-auto mx-md-0 fw-bolder">
              <img width="60" className="mx-2  " height="70" src="./bookcase-svgrepo-com.svg" alt="" />
              Bookory
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
                    <span className="cartNum w-100 text-sm">
                      {cartLength || 0}
                    </span>

                    <i className=" py-2 text-black fa fs-2 fa-cart-shopping cart-nav text-dark"></i>
                  </div>
                </NavLink>
              </div>
              <NavLink to="/login">
                {" "}
                <div className="text-sm" onClick={logout}>
                 <img width="40" height="45" className="mb-2" src="avatar.png"  alt="log out"/>
                </div>
              </NavLink>
            </nav>
          </div>
        </div>
      ) : (
        <div className=" navbar-component sticky-top">
          <div className="navbar area">
            <div className="brand col-12 m-0  text-center fs-1 mt-2  mx-auto mx-md-0 fw-bolder">
              <i className="fas fa-books"></i>Bookory
            </div>

            {user == "admin" && (
              <nav
                role="navigation"
                id="navigation"
                className="position-absolute list px-5 mx-5"
              >
                <div className="item-link py-2  px-3 text-sm  ">
                  {" "}
                  <NavLink
                    to="/admin"
                    activeClassName=".active"
                    className={"bar-item"}
                  >
                    <div>Admin</div>
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

                <NavLink to="/login">
                  {" "}
                  <div className="text-sm" onClick={logout}>
                <img width="40" height="45" className="mb-2" src="avatar.png"  alt="log out"/>
                  </div>
                </NavLink>
              </nav>
            )}
          </div>
        </div>
      )}
    </>
  );
}
