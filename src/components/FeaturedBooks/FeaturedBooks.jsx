import React from "react";

export default function FeaturedBooks(props) {
  console.log(props.books);
  return (
    <>
      <div className="bg-white filter-option border">
        <div className="title fw-semibold px-4 py-3">Featured Books</div>
        <div className="options">
          <ul className="py-4">
            {props.books.map((item, index) => (
              <li key={index}>
                <div className="row d-flex align-items-center">
                  <div className="col-4 single-featured-book">
                    <img
                      // src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/27.jpg"
                      src={item.imageCover}
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <div className="text-black text-sm fw-semibold p ">
                      {item.title}
                    </div>
                    <div className=" text-black-50">{item.author.name}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
