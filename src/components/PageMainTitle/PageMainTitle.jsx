import React from "react";

export default function PageMainTitle(props) {
  return (
    <>
      <div className="row   page-title-container py-2  m-0  ">
        <div className="py-2 px-5 container  m-0 d-flex align-items-center  ">
          <div className="col-5  page-title-shop fw-bold">{props.title}</div>
          <div className="col-6    text-end text-sm  text-danger px-5 mx-2  fw-semibold">
            Home <i className="fa-solid fa-arrow-right-long"></i> {props.title}
          </div>
        </div>
      </div>
    </>
  );
}
