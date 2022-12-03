import React from "react";
import PageMainTitle from "../PageMainTitle/PageMainTitle";
import "./DashBoard.css";
import { useNavigate } from "react-router-dom";
export default function DashBoard() {
  let navigate = useNavigate();
  let navigateToShop = () => {
    navigate("/shop");
  };
  let navigateToNewForm = () => {
    navigate("/new");
  };
  return (
    <>
      <PageMainTitle title="Dash Board" />

      <div className="row  m-0   d-flex justify-content-center align-items-center">
        <div className="col-8 admin-action d-flex flex-wrap justify-content-center px-5 my-5 container">
          {" "}
          <button
            onClick={navigateToNewForm}
            className=" my-5 col-4 rounded-pill section-btn1 px-5 mx-3 py-5  d-flex align-items-center justify-content-center"
          >
            ADD New Book{" "}
          </button>
          <button
            onClick={navigateToShop}
            className=" my-5 col-4 rounded-pill section-btn1 px-5 mx-3 py-3 d-flex align-items-center justify-content-center"
          >
            Show Books{" "}
          </button>
          <button
            onClick={navigateToNewForm}
            className=" my-5 col-4 rounded-pill section-btn1 px-5 mx-3 py-5  d-flex align-items-center justify-content-center"
          >
            Stats{" "}
          </button>
          <button
            onClick={navigateToNewForm}
            className=" my-5 col-4 rounded-pill section-btn1 px-5 mx-3 py-5  d-flex align-items-center justify-content-center"
          >
            logout{" "}
          </button>
        </div>
      </div>
    </>
  );
}
