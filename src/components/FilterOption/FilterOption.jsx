import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function FilterOption(props) {
  //state to track the filter option selected
  let [filters, setFilters] = useState([]);

  useEffect(() => {
    //send the filter options selected to the parent component
    props.handleFilter(filters);
  }, [filters]);

  //handle select filter option
  let handleSelect = (category) => {
    if (filters.includes(category)) {
      let arr = [...filters];
      let idx = arr.indexOf(category);
      arr.splice(idx, 1);
      setFilters(arr);
    } else {
      setFilters((prev) => [...prev, category]);
    }
  };

  return (
    <>
      <div className="filter-option bg-white border">
        <div className="title fw-semibold px-4 py-3">{props.name}</div>
        <div className="options">
          <ul>
            {props.options.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => {
                    handleSelect(item);
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
