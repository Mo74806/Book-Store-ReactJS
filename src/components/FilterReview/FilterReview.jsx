import React from "react";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function FilterReview(props) {
  //handle changing in the review filter option
  //filter the books
  //return only the books that match the review selected
  let handleChange = (value) => {
    let newbooks = props.booksData.filter((item) => item.ratingAvg >= value);
    props.handleFilter(newbooks);
  };

  return (
    <>
      <div className="bg-white filter-option border">
        <div className="title fw-semibold px-4 py-3">Reviews</div>
        <div className="options">
          <ul className="py-4">
            {[3, 4, 5].map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleChange(item);
                }}
                className="bg-transparent border border-0"
              >
                <li>
                  <Rating
                    className="rating"
                    name="text-feedback"
                    value={item}
                    readOnly
                    precision={0.5}
                    size="small"
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <div className="text-black px-2">{`  (${item})  `}</div>
                </li>
              </button>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
