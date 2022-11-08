import React from "react";
import { Slider } from "@mui/material";
export default function FilterRange(props) {
  //handle changing in the range filter option
  //filter the books
  //return only the books that match the range selected
  let handleChange = (e) => {
    let newbooks = props.booksData.filter(
      (item) => parseInt(item.price) < parseInt(e.target.value)
    );
    props.handleFilter(newbooks);
  };

  return (
    <>
      <div className="bg-white filter-option border">
        <div className="title fw-semibold px-4 py-3">{props.name}</div>
        <div className="options">
          <div className="row justify-content-center">
            <div className="col-8 mt-3">
              <Slider
                aria-label="Always visible"
                size="small"
                defaultValue={70}
                valueLabelDisplay="auto"
                max={props.max}
                marks={props.marks}
                color="success"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row px-5 mb-4 mt-2">
            <small className="fw-100 text-black-50">
              {props.name} :{" "}
              <span className="fw-400 text-black">
                {props.min}$ : {props.max}$
              </span>{" "}
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
