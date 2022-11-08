import React from "react";
import "./SectionTitle.css";
export default function SectionTitle(props) {
  return (
    <>
      <div className="row d-flex ">
        <div className="col-lg-3  col-5 px-3  my-2 h3 fw-bold">
          {props.title}
        </div>
        <div className="col-lg-7 col-3  mt-4 herizontal-line"></div>
        <div className="col-lg-2 col-4 m-0">
          <button
            className="rounded-pill section-btn"
            onClick={props.handleClick}
          >
            View All{" "}
          </button>
        </div>
      </div>
    </>
  );
}
