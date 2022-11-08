import React from "react";
import "./SocialMediaIcons.css";
export default function SocialMediaIcons(props) {
  return (
    <>
      <div className="row ">
        <div className={`col-12 my-4  d-flex ${props.className} `}>
          {" "}
          <i
            className={`${
              props.color ? "color1" : "text-white-50"
            } mx-2 fa-brands fa-square-facebook`}
          ></i>
          <i
            className={`${
              props.color ? "color2" : "text-white-50"
            } mx-2 fa-brands fa-square-twitter`}
          ></i>
          <i
            className={`${
              props.color ? "color3" : "text-white-50"
            } mx-2 fa-brands fa-linkedin`}
          ></i>
          <i
            className={`${
              props.color ? "color4" : "text-white-50"
            } mx-2 fa-brands fa-square-pinterest`}
          ></i>
        </div>
      </div>
    </>
  );
}
